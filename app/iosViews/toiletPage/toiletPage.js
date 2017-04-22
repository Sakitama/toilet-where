import React, {Component} from 'react';

import {TWebView} from '../common/tWebView';

const nearByURL = 'http://localhost:63342/toilet/app/html/webToilet/near_toilet.html?_ijt=a14fffv61vhb7l3v4dbdp8at80';

export class ToiletPage extends Component {
    render() {
        return (
            <TWebView
                url={nearByURL}
                isNearBy={true}
            />
        );
    }
}