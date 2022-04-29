import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar } from '@wordpress/edit-post';
import { tool, home, settings, info } from '@wordpress/icons';
import TabPanel from './components/tab-panel';
import { DataTab, SettingsTab } from './components/tabs';
import PeekAttributes from './components/peek-attributes';
import { updateSettings } from './utils/settings';
import { DataProvider } from './hooks/context';
import { Icon } from '@wordpress/components';

const PluginSidebarTest = () => {
	updateSettings();

	return (
		<PluginSidebar
			name="plugin-sidebar-test"
			title="Gutenbuild"
			icon={ tool }
		>
			<DataProvider>
				<TabPanel
					tabs={ [
						{
							name: 'data',
							title: <Icon icon={ home } />,
							className: 'tab-one',
							content: <DataTab />,
						},
						{
							name: 'attributes',
							title: <Icon icon={ info } />,
							className: 'tab-three',
							content: <PeekAttributes />,
						},
						{
							name: 'settings',
							title: <Icon icon={ settings } />,
							className: 'tab-three',
							content: <SettingsTab />,
						},
					] }
				/>
			</DataProvider>
		</PluginSidebar>
	);
};

registerPlugin( 'plugin-sidebar-test', { render: PluginSidebarTest } );
