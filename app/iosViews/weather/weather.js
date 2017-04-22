import React, {Component} from 'react';

import {TWebView} from '../common/tWebView';
const url = 'http://localhost:63342/toilet/app/html/webWeather/weather.html?_ijt=a14fffv61vhb7l3v4dbdp8at80';

export class Weather extends Component {
    render() {
        return (<TWebView url={url} isWeather={true}/>);
    }
}

