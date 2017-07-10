import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import registerScreens from './app/screens';

import store from './app/store/store';

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'example.ProductsList',
        title: 'Welcome',
        navigatorStyle: {},
    }
});