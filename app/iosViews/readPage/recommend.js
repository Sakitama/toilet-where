import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import Util from '../util/util';
import {List} from './list';
import {TWebView} from '../common/tWebView';

export class Recommend extends Component {
    render() {
        return (
            <View style={this.props.title === '热门推荐' ? [styles.tj, {
                borderBottomWidth: Util.pixel,
                borderColor: '#ccc'
            }] : styles.tj}>
                <View>
                    <Text style={styles.bigText}>{this.props.title}</Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.tjTopicItem, {marginRight: 5}, styles.shadow]}
                                      onPress={this._showDetail.bind(this, this.props.data[0].title, this.props.data[0].url)}>
                        <Image source={{uri: this.props.data[0].img}} resizeMode="cover" style={styles.img}/>
                        <Text style={styles.textStyle} numberOfLines={2}>{this.props.data[0].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tjTopicItem, {marginLeft: 5, marginRight: 5}, styles.shadow]}
                                      onPress={this._showDetail.bind(this, this.props.data[1].title, this.props.data[1].url)}>
                        <Image source={{uri: this.props.data[1].img}} resizeMode="cover" style={styles.img}/>
                        <Text style={styles.textStyle} numberOfLines={2}>{this.props.data[1].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tjTopicItem, {marginLeft: 5, marginRight: 5}, styles.shadow]}
                                      onPress={this._showDetail.bind(this, this.props.data[2].title, this.props.data[2].url)}>
                        <Image source={{uri: this.props.data[2].img}} resizeMode="cover" style={styles.img}/>
                        <Text style={styles.textStyle} numberOfLines={2}>{this.props.data[2].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tjTopicItem, {marginLeft: 5}, styles.shadow]}
                                      onPress={this._showDetail.bind(this, this.props.data[3].title, this.props.data[3].url)}>
                        <Image source={{uri: this.props.data[3].img}} resizeMode="cover" style={styles.img}/>
                        <Text style={styles.textStyle} numberOfLines={2}>{this.props.data[3].title}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.tjTopicItem, {marginRight: 5}, styles.shadow]}
                                      onPress={this._showDetail.bind(this, this.props.data[4].title, this.props.data[4].url)}>
                        <Image source={{uri: this.props.data[4].img}} resizeMode="cover" style={styles.img}/>
                        <Text style={styles.textStyle} numberOfLines={2}>{this.props.data[4].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tjTopicItem, {marginLeft: 5, marginRight: 5}, styles.shadow]}
                                      onPress={this._showDetail.bind(this, this.props.data[5].title, this.props.data[5].url)}>
                        <Image source={{uri: this.props.data[5].img}} resizeMode="cover" style={styles.img}/>
                        <Text style={styles.textStyle} numberOfLines={2}>{this.props.data[5].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tjTopicItem, {marginLeft: 5, marginRight: 5}, styles.shadow]}
                                      onPress={this._showDetail.bind(this, this.props.data[6].title, this.props.data[6].url)}>
                        <Image source={{uri: this.props.data[6].img}} resizeMode="cover" style={styles.img}/>
                        <Text style={styles.textStyle} numberOfLines={2}>{this.props.data[6].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tjTopicItem, {marginLeft: 5}, styles.shadow]}
                                      onPress={this._showDetail.bind(this, this.props.data[7].title, this.props.data[7].url)}>
                        <Image source={{uri: this.props.data[7].img}} resizeMode="cover" style={styles.img}/>
                        <Text style={styles.textStyle} numberOfLines={2}>{this.props.data[7].title}</Text>
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
            barTintColor: '#fff',
            title: this.props.title,
            passProps: {
                type: this.props.type
            }
        });
    }
}

const styles = StyleSheet.create({
    tj: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    },
    bigText: {
        fontSize: 17,
        fontWeight: '300'
    },
    textStyle: {
        fontSize: 13,
        color: '#4C4C4C',
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    },
    row: {
        flexDirection: 'row',
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
        height: 120
    },
    shadow: {
        shadowOpacity: 1,
        shadowColor: '#ccc',
        shadowOffset: {
            width: Util.pixel,
            height: Util.pixel
        }
    }
});