import { TabPanel as Tabs } from '@wordpress/components';
import './style.scss';

const TabPanel = ( { tabs, onSelect } ) => {
	return (
		<Tabs
			onSelect={ onSelect }
			className="gutenbuild-tab-panel"
			activeClass="active-tab"
			tabs={ tabs }
		>
			{ ( tab ) => (
				<div className="gutenbuild-tab-panel__content">
					{ tab.content }
				</div>
			) }
		</Tabs>
	);
};

export default TabPanel;
