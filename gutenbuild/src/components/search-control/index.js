import { SearchControl } from '@wordpress/components';

const MySearchControl = ( { value, onChange } ) => (
	<SearchControl
		className="gutenbuild-searchcontrol"
		label={ 'Search' }
		hideLabelFromVision={ true }
		value={ value }
		onChange={ ( val ) => onChange( val ) }
	/>
);

export default MySearchControl;
