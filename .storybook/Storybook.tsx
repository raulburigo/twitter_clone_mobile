import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStorybookUI } from '@storybook/react-native';
import './storybook.requires';

const Storybook = getStorybookUI({
  //@ts-ignore
  asyncStorage: AsyncStorage,
  port: 7007,
  host: '0.0.0.0',
	onDeviceUI: true,
	// disableWebsockets: true,
	// shouldPersistSelection: true,
});

export default Storybook;