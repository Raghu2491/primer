import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DetailsScreen from './coponents/SecondScreen'
import HomeScreen from './coponents/HomeScreen'
import ThirdScreen from './coponents/ThirdScreen'
import FourthScreen from './coponents/FourthScreen'
import FifthScreen from './coponents/FifthScreen'
import { Provider } from 'react-redux';
import configStore from './store/config_store';

const store = configStore();

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: ThirdScreen,
        FourthScreen: FourthScreen,
        FifthScreen: FifthScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);

const RNRedux = () => (
    <Provider store={ store }>
        <AppContainer/>
    </Provider>
);

export default class App extends React.Component {
    render() {
        return <RNRedux />;
    }
}
