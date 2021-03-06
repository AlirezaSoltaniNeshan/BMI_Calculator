import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import index from './src/screen/index.js';
import ResultScreen from './src/components/ResultScreen.js'
const navigator = createStackNavigator({
  index:index,
  ResultScreen:ResultScreen,
},
{
  initialRouteName:'index',
  defaultNavigationOptions:{
    headerShown:false,
    ...TransitionPresets.ModalPresentationIOS,
    cardOverlayEnabled:true,
    gestureEnabled:true
}, 
  }
)
export default createAppContainer(navigator);


