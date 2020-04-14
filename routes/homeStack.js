import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Kanye_World from '../screens/Kanye_World';
import Menu from '../screens/Menu';
import RPS from '../screens/RPS';
import Stay_On_Task from '../screens/Stay_On_Task';
import Flappy_Bird from '../screens/Flappy_Bird'

const screens = {
    Menu: {
        screen: Menu
    },
    Kanye_World: {
        screen: Kanye_World
    },
    Stay_On_Task: {
        screen: Stay_On_Task
    },
    RPS: {
        screen: RPS
    },
    Flappy_Bird: {
        screen: Flappy_Bird
    },

}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);