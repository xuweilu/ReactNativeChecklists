/**
 * Created by william on 2017/7/6.
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, SectionList} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        alignItems: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
});

class ChecklistDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.item}>{this.props.text}</Text>
            </View>
        )
    }
}

export default ChecklistDetails;