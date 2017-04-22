import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';

export class Search extends Component {
    render() {
        return (
            <View style={styles.searchWrapper}>
                <TextInput
                    style={styles.search}
                    placeholder="搜索"
                    placeholderTextColor="#494949"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchWrapper: {
        backgroundColor: 'rgb(3, 116, 255)',
    },
    search: {
        marginLeft: 10,
        marginRight: 10,
        height: 30,
        borderRadius: 3,
        marginTop: 30,
        marginBottom: 10,
        paddingLeft: 10,
        fontSize: 15,
        backgroundColor: '#fff'
    }
});