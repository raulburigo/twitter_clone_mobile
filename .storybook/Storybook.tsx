import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStorybookUI } from '@storybook/react-native';
import './storybook.requires';

const Storybook = getStorybookUI({
  //@ts-ignore
  asyncStorage: AsyncStorage,
	onDeviceUI: false,
	disableWebsockets: true,
	shouldPersistSelection: true,
});

export default Storybook;