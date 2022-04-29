import { useState } from '@wordpress/element';
import { PanelBody, ToggleControl } from '@wordpress/components';
import './style.scss';
import { SKELETON_KEY } from '../../../utils/keys';
import { updateSettings } from '../../../utils/settings';

const SettingsTab = () => {
	const [ skeletonMode, setSkeletonMode ] = useState(
		localStorage.getItem( SKELETON_KEY )
	);

	updateSettings();

	return (
		<PanelBody title="Skeleton Mode">
			<p>
				Adds a border to every block. Helps to see document structure
				and selecting parent blocks.
			</p>
			<ToggleControl
				label="On"
				checked={ skeletonMode }
				onChange={ () => {
					const isToggled = ! skeletonMode;
					setSkeletonMode( isToggled );

					if ( isToggled ) {
						localStorage.setItem( SKELETON_KEY, true );
					} else {
						localStorage.removeItem( SKELETON_KEY );
					}
				} }
			/>
		</PanelBody>
	);
};

export default SettingsTab;
