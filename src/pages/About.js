import React, {Component} from 'react';
import '../css/all.css';
import Nav from './nav';
import Header from './header';


export default class location extends Component {
    render () {
        return (
            <body>
            <div className='page'>
                <Header />
                <Nav />


            </div>
            </body>
        )
    }
};
