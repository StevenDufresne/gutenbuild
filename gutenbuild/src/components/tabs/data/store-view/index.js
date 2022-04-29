/**
 * External dependencies
 */
import { useState, useEffect } from '@wordpress/element';

import ClickableList from '../../../clickable-list';
import { useData } from '../../../../hooks/context';
import { Icon, PanelBody } from '@wordpress/components';
import SearchControl from '../../../search-control';
import { lifesaver } from '@wordpress/icons';

const StoreView = () => {
	const { search, keyword, setKeyword } = useData();
	const [ searchResults, setSearchResults ] = useState( [] );

	const onSearch = () => {
		let s = [];

		if ( keyword.trim().length > 0 ) {
			s = search( keyword );
		}
		setSearchResults( s );
	};

	useEffect( onSearch, [ keyword ] );

	return (
		<div>
			<PanelBody style={{ border: 'none'}}>
				<SearchControl value={ keyword } onChange={ setKeyword } />
			</PanelBody>

			{ searchResults.length ? (
				<ClickableList items={ searchResults } />
			) : (
				<PanelBody>
					<div style={ { textAlign: 'center' } }>
						<p>
							<Icon icon={ lifesaver } size={ 68 } />
						</p>
						<p>Search for Gutenberg functions or components.</p>
					</div>
				</PanelBody>
			) }
		</div>
	);
};

export default StoreView;
