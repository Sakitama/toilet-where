import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Util from '../util/util';
import {List} from './list';

export class Category extends Component {
    render() {
        return (
            <View style={styles.tj}>
                <View>
                    <Text style={styles.bigText}>分类</Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.tjTopicItem, {marginRight: 5}, styles.shadow]}
                                      onPress={this._showList.bind(this, this.props.data[0].text)}>
                        <Text style={styles.textStyle}>{this.props.data[0].text}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tjTopicItem, {marginLeft: 5}, styles.shadow]}
                                      onPress={this._showList.bind(this, this.props.data[1].text)}>
                        <Text style={styles.textStyle}>{this.props.data[1].text}</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.row, styles.tjTopic]}>
                    <TouchableOpacity style={[styles.tjTopicItem, {marginRight: 5}, styles.shadow]}
                                      onPress={this._showList.bind(this, this.props.data[2].text)}>
                        <Text style={styles.textStyle}>{this.props.data[2].text}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tjTopicItem, {marginLeft: 5}, styles.shadow]}
                                      onPress={this._showList.bind(this, this.props.data[3].text)}>
                        <Text style={styles.textStyle}>{this.props.data[3].text}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    _showList(keywords) {
        let type;
        switch (keywords) {
            case '互联网':
                type = 'it';
                break;
            case '散文':
                type = 'article';
                break;
            case '笑话':
                type = 'joke';
                break;
            default :
                type = 'manage';
                break;
        }
        this.props.navigator.push({
            component: List,
            barTintColor: '#fff',
            title: keywords,
            passProps: {
                type: type
            }
        });
    }
}

const styles = StyleSheet.create({
    tj: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        borderBottomWidth: Util.pixel,
        borderColor: '#ccc'
    },
    bigText: {
        fontSize: 17,
        fontWeight: '300'
    },
    row: {
        flexDirection: 'row',
        marginTop: 10
    },
    tjTopicItem: {
        flex: 1,
        borderWidth: Util.pixel,
        borderColor: '#ccc',
        height: 80,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shadow: {
        shadowOpacity: 1,
        shadowColor: '#ccc',
        shadowOffset: {
            width: Util.pixel,
            height: Util.pixel
        }
    },
    textStyle: {
        fontSize: 17,
        color: '#707070'
    }
});
