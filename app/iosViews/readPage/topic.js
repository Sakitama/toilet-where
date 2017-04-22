import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import Util from '../util/util';
import {List} from './list';
import {TWebView} from '../common/tWebView';

export class Topic extends Component {
    render() {
        return (
            <View style={styles.tj}>
                <View>
                    <Text style={styles.bigText}>推荐专题</Text>
                </View>
                <View style={[styles.row, styles.tjTopic]}>
                    <TouchableOpacity style={[styles.tjTopicItem, {paddingRight: 5}]}
                                      onPress={this._showDetail.bind(this, this.props.data[0].title, this.props.data[0].url)}>
                        <Image source={{uri: this.props.data[0].img}} resizeMode="cover" style={styles.img}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tjTopicItem, {paddingLeft: 5}]}
                                      onPress={this._showDetail.bind(this, this.props.data[1].title, this.props.data[1].url)}>
                        <Image source={{uri: this.props.data[1].img}} resizeMode="cover" style={styles.img}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.tjTQ} onPress={this._showList.bind(this)}>
                    <Text style={styles.tjTQText}>查看同期专题 &gt; </Text>
                </TouchableOpacity>
            </View>
        );
    }

    _showDetail(title, url) {
        this.props.navigator.push({
            component: TWebView,
            title: title,
            barTintColor: '#fff',
            passProps: {
                url: url,
                isMargin: 1
            }
        });
    }

    _showList() {
        this.props.navigator.push({
            component: List,
            title: '推荐专题',
            barTintColor: '#fff',
            passProps: {
                type: this.props.type
            }
        });
    }
}

const styles = StyleSheet.create({
    tj: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        marginTop: 10,
        borderBottomWidth: Util.pixel,
        borderColor: '#ccc'
    },
    bigText: {
        fontSize: 17,
        fontWeight: '300'
    },
    row: {
        flexDirection: 'row'
    },
    tjTopic: {
        marginTop: 10
    },
    tjTopicItem: {
        flex: 1
    },
    tjTQ: {
        marginTop: 10
    },
    tjTQText: {
        fontWeight: '300',
        fontSize: 15,
        color: '#7D7D81'
    },
    img: {
        height: 100,
        borderRadius: 5
    }
});
