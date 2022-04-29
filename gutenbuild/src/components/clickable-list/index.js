/**
 * External dependencies
 */
import { useState, useEffect } from '@wordpress/element';
import { Button, Icon } from '@wordpress/components';
import { copy, check } from '@wordpress/icons';

import { trunc } from '../../utils/misc';

import './style.scss';

/**
 * Uses a hidden textarea that is added and removed from the DOM in order to copy to clipboard via the Browser.
 *
 * @param {string} stringToCopy A string that will be copied to the clipboard
 * @return {boolean} Whether the copy function succeeded
 */
export const copyToClipboard = ( stringToCopy ) => {
	const element = document.createElement( 'textarea' );

	// We don't want the text area to be selected since it's temporary.
	element.setAttribute( 'readonly', '' );

	// We don't want screen readers to read the content since it's pattern markup
	element.setAttribute( 'aria-hidden', 'true' );

	// We don't want the text area to be visible since it's temporary.
	element.style.position = 'absolute';
	element.style.left = '-9999px';

	element.value = stringToCopy;

	document.body.appendChild( element );
	element.select();

	const success = document.execCommand( 'copy' );
	document.body.removeChild( element );

	return success;
};

const formatText = ( type, text ) => {
	let truncated = trunc( text, 30 );
	switch ( type ) {
		case 'component':
			return `<${ truncated } />`;
		case 'object':
			return `{ ${ truncated } }`;
		default:
			return truncated;
	}
};

const ClickableItem = ( { item } ) => {
	const [ copied, setCopied ] = useState( false );
	const split = item.text.split( '.' );
	const text = split.pop();

	// useEffect( () => {
	// 	if ( ! copied ) {
	// 		return;
	// 	}

	// 	const timer = setTimeout( () => setCopied( false ), 5000 );
	// 	return () => {
	// 		clearTimeout( timer );
	// 	};
	// }, [ copied ] );

	return (
		<li>
			<a href={ item.link } target="_blank" title={ item.text }>
				<div className="gutenbuild-clickable-list__title">
					{ formatText( item.type, text ) }
				</div>
				{
					<span
						key={ item.key }
						className="gutenbuild-clickable-list__subtitle"
					>
						{ split.join( '.' ) }
					</span>
				}
				<div className="gutenbuild-clickable-list__tools">
					<Button
						isSmall={ true }
						isPrimary={ true }
						onClick={ ( e ) => {
							e.stopPropagation();
							e.preventDefault();

							copyToClipboard( `wp.${ item.text }` );
							setCopied( true );
						} }
					>
						<Icon size={ 18 } icon={ copied ? check : copy } />
					</Button>
				</div>
			</a>
		</li>
	);
};

const ClickableList = ( { items } ) => {
	return (
		<ul className="gutenbuild-clickable-list">
			{ items.map( ( i ) => (
				<ClickableItem key={ i.text } item={ i } />
			) ) }
		</ul>
	);
};

export default ClickableList;
