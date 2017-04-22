import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';

export class About extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.text}>如果问题,请联系: verajhu@gmail.com</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 15,
        marginLeft: 10,
        marginTop: 3
    }
});