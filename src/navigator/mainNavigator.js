import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen415794Navigator from '../features/BlankScreen415794/navigator';
import BlankScreen315790Navigator from '../features/BlankScreen315790/navigator';
import BlankScreen215755Navigator from '../features/BlankScreen215755/navigator';
import BlankScreen115754Navigator from '../features/BlankScreen115754/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen415794: { screen: BlankScreen415794Navigator },
BlankScreen315790: { screen: BlankScreen315790Navigator },
BlankScreen215755: { screen: BlankScreen215755Navigator },
BlankScreen115754: { screen: BlankScreen115754Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
