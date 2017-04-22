import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    ListView
} from 'react-native';

import Util from '../util/util';
import {TWebView} from '../common/tWebView';

const SUCCESS = 0;

export class List extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            type: this.props.type,
            dataSource: ds.cloneWithRows([])
        };

    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <ListView dataSource={this.state.dataSource} enableEmptySections={true}
                          renderRow={(rowData) =>
                              (
                                  <TouchableOpacity style={[styles.item, styles.row]}
                                                    onPress={this._showDetail.bind(this, rowData.url, rowData.title)}>
                                      <View>
                                          <Image style={styles.img} source={{uri: rowData.img}} resizeMode="cover"/>
                                      </View>
                                      <View style={styles.text}>
                                          <Text style={styles.title} numberOfLines={1}>{rowData.title}</Text>
                                          <Text style={styles.name}>{rowData.time.split("T")[0]} </Text>
                                      </View>
                                  </TouchableOpacity>
                              )
                          }/>
            </ScrollView>
        );
    }

    componentDidMount() {
        let url = 'http://localhost:3000/data/read?type=' + this.state.type;
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        Util.get(url, (data) => {
            if (data.status === SUCCESS) {
                this.setState({
                    dataSource: ds.cloneWithRows(data.data)
                });
            } else {
                alert('服务异常,正在紧急修复,请耐心等待');
            }
        }, (err) => {
            alert(err);
            alert('服务异常,正在紧急修复2,请耐心等待');
        });
    }

    _showDetail(url, title) {
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

}

const styles = StyleSheet.create({
    item: {
        height: 70,
        borderBottomWidth: Util.pixel,
        borderBottomColor: '#ccc'
    },
    row: {
        flexDirection: 'row'
    },
    img: {
        height: 60,
        width: 60,
        marginLeft: 10,
        marginTop: 5,
        marginRight: 5,
        marginBottom: 5,
        borderRadius: 3,
    },
    text: {
        marginLeft: 5,
        flex: 1
    },
    title: {
        fontSize: 16,
        marginTop: 10,
    },
    name: {
        fontSize: 14,
        color: '#ccc',
        marginTop: 10
    }
});