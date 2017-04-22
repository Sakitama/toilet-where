import React, {Component} from 'react';
import {Recommend} from './recommend';
import {Category} from './category';
import {Search} from './search';
import {Topic} from './topic';
import {
    StyleSheet,
    View,
    ScrollView,
    NavigatorIOS,
    RefreshControl,
    ActivityIndicator
} from 'react-native';
import Util from '../util/util';

const SUCCESS = 0;

class ReadView extends Component {
    state = {
        isShow: false,
        recommendTopic: null,
        hotTopic: null,
        category: null,
        other: null,
        refreshing: false
    };

    _fetchData() {
        Util.get('http://localhost:3000/data/read?type=config', (data) => {
            if (data.status === SUCCESS) {
                let obj = data.data;
                this.setState({
                    isShow: true,
                    recommendTopic: obj.recommendTopic,
                    hotTopic: obj.hotTopic,
                    category: obj.category,
                    other: obj.other,
                    refreshing: false
                });
            } else {
                alert('服务异常,正在紧急修复,请耐心等待');
            }
        }, (err) => {
            alert(err);
            alert('服务异常,正在紧急修复,请耐心等待');
        });
    }

    componentDidMount() {
        this._fetchData();
    }

    render() {
        return (
            <View style={styles.container}>
                <Search/>
                {
                    this.state.isShow ?
                        (<ScrollView style={styles.scrollContainer}
                                     refreshControl={
                                         <RefreshControl
                                             refreshing={this.state.refreshing}
                                             onRefresh={this._onRefresh.bind(this)}
                                         />
                                     }>
                            <Topic data={this.state.recommendTopic} navigator={this.props.navigator} type="manage"/>
                            <Recommend title="热门推荐" data={this.state.hotTopic} navigator={this.props.navigator}
                                       type="it"/>
                            <Category data={this.state.category} navigator={this.props.navigator}/>
                            <Recommend title="开心一刻" data={this.state.other} navigator={this.props.navigator}
                                       type="joke"/>
                        </ScrollView>)
                        :
                        (<ActivityIndicator
                            animating={true}
                            style={styles.indicator}
                            size="large"
                        />)
                }
            </View>
        );
    }

    _onRefresh() {
        this.setState({refreshing: true});
        this._fetchData();
    }
}

export class ReadPage extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: ReadView,
                    title: '阅读',
                    navigationBarHidden: true
                }}
                style={styles.navigator}
            />
        );
    }
}

const styles = StyleSheet.create({
    navigator: {
        flex: 1
    },
    scrollContainer: {
        marginBottom: 119
    },
    indicator: {
        height: 80
    }
});
