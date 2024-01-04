/**
 * @format
 */

import {AppRegistry} from 'react-native';
import MainNavigator from '@core/dbc';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainNavigator);
