/**
 * Created by william on 2017/7/6.
 */
import {Navigation} from 'react-native-navigation';

import Checklists from './components/Checklists';
import ChecklistDetails from './components/ChecklistDetails';

export default registerScreens = (store, Provider) => {
    Navigation.registerComponent('example.Checklists', () => Checklists, store, Provider);
    Navigation.registerComponent('example.ChecklistDetails', () => ChecklistDetails, store, Provider);
};