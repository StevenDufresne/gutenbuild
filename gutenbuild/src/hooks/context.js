/**
 * External dependencies
 */

import { search as fastSearch } from 'fast-fuzzy';

/**
 * WordPress dependencies
 */
import { createContext, useContext, useState, useEffect } from '@wordpress/element';

/**
 * Module Constants
 */
const MAX_RESULTS = 24;

const StateContext = createContext();

const getType = ( obj, lib, prop ) => {
	if (
		lib === 'components' ||
		obj[ lib ][ prop ].$$typeof ||
		(prop[ 0 ] !== "_" && prop[ 0 ] === prop[ 0 ].toUpperCase()) 
	) {
		return 'component';
	}

	return typeof obj[ lib ][ prop ];
};

const cleanLib = ( lib ) =>
	lib
		.split( /(?=[A-Z])/ )
		.join( '-' )
		.toLowerCase();


const getDocModule = ( activeStore ) => {
    const s = activeStore.split( '/' );

    // Not Core
    if ( s[ 1 ] ) {
        return '-' + s[ 1 ];
    }

    return '';
};

const getDocLink = ( lib, prop, type ) => {
	if ( 'components' === lib ) {
		return `https://wordpress.github.io/gutenberg/?path=/story/components-${ prop }--default`;
	}

	let link = `https://developer.wordpress.org/block-editor/reference-guides/packages/packages-${ cleanLib(
		lib
	) }`;

	if(lib.startsWith('data')) {
        const storeName = lib.substring(
            lib.indexOf("'") + 1, 
            lib.lastIndexOf("'")
        );

        if(storeName) {
            return `https://developer.wordpress.org/block-editor/reference-guides/data/data-core${getDocModule(storeName)}/#${prop.toLowerCase()}`
        }
        return `https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data`;
    }   

	if ( type === 'function' ) {
		return `${ link }/#${ prop.toLowerCase() }`;
	}

	return link;
};



const flatten = ( obj ) => {
	var out = [];

	for ( var lib in obj ) {
		for ( var prop in obj[ lib ] ) {
			if ( obj[ lib ][ prop ] ) {
				const type = getType( obj, lib, prop );
                let t = `${ lib }.${ prop }`;
				out.push( {
					text: type === 'function' ? t + '()' : t ,
					type: type,
					link: getDocLink( lib, prop, type ),
				} );
			}
		}
	}
	return out;
};

export function DataProvider( { children } ) {
    const [keyword, setKeyword] = useState('');
    const [dataList, setDataList ] = useState([]);


    useEffect( () => {
        let allData = flatten( wp );

        const stores = {};
    
        for ( let i = 0; i < Object.keys( wp ).length; i++ ) {
            const key = Object.keys( wp )[ i ];
            if ( wp[ key ].store ) {
                stores[ key ] = wp[ key ];
            }
        }
        const storeNames = Object.keys( stores ).map(
            ( i ) => stores[ i ].store.name
        );
    
        // Add Select Functions
        for ( let k = 0; k < storeNames.length; k++ ) {
            const store = storeNames[ k ];
            allData = allData.concat(
                flatten( {
                    [ `data.select('${ store }')` ]: wp.data.select( store ),
                } )
            );
        }
    
        // Add Dispatch Functions
        for ( let k = 0; k < storeNames.length; k++ ) {
            const store = storeNames[ k ];
            allData = allData.concat(
                flatten( {
                    [ `data.dispatch('${ store }')` ]: wp.data.dispatch( store ),
                } )
            );
        }

        setDataList(allData);

        console.log('list');

    }, [])



	const search = ( keyword ) => {
		const results = fastSearch( keyword, dataList, {
			ignoreCase: true,
			keySelector: ( obj ) => obj.text,
		} );
		return results.splice( 0, MAX_RESULTS );
	};

	return (
		<StateContext.Provider
			value={ {
				search,
                keyword,
                setKeyword,
			} }
		>
			{ children }
		</StateContext.Provider>
	);
}

export function useData() {
	const context = useContext( StateContext );

	if ( context === undefined ) {
		throw new Error( 'useData must be used within a Provider' );
	}

	return context;
}
