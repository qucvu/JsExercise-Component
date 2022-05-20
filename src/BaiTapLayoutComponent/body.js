import React, { Component } from 'react';
import Banner from './banner';
import Item from './item';


class Body extends Component {
    
    render() {
        return (
            <div>
                <Banner />
                <Item />
            </div>
        );
    }
}

export default Body;