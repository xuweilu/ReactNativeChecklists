/**
 * Created by william on 2017/7/6.
 */
import React, {Component} from 'react';
import ActionCreators from '../actions/ActionCreators';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, SectionList} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
});

class Checklists extends Component {
    _onPressToDetails(item) {
        this.props.navigator.push({
            screen: 'example.ChecklistDetails',
            title: 'Details',
            passProps: item,
        })
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchChecklists();
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.props.checklists}
                          renderItem={({item}) =>
                              <TouchableOpacity onPress={this._onPressToDetails.bind(this, item)}>
                                  <Text style={styles.item}>{item.text}</Text>
                              </TouchableOpacity>}
                />
            </View>
        )
    }
}


const mapStateToProps = (state) => (
    {
        checklists: state.checklists,
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        fetchChecklists: () => dispatch(ActionCreators.fetchChecklists()),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Checklists);