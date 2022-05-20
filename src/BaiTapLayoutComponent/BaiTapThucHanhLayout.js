import React, { Component } from 'react';
import Header from "./header.js"
import Footer from './footer.js';
import Body from './body.js';
class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Body />
                <Footer />
                
            </div>
        );
    }
}

export default BaiTapThucHanhLayout;