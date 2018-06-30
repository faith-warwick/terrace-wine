import React, {Component} from 'react';
import {
    BrowserRouter,
    Link
} from 'react-router-dom';
import '../css/all.css';
import Header from './header';
import Nav from './nav';
import Footer from './footer';
import '../css/home.css';
import food from '../images/terrace-food.jpg';


class homePage extends Component {
    render () {
        return (
            <body>
                <div className='page'>
                    <Header />
                    <Nav />
                    <div className='centerImg'>
                    </div>
                    <div className='menusHome'>
                        <img src={food} alt='Caprese' />
                        <div className='sideBar'>
                            <h3>Menus</h3>
                            <p>
                                Elegant wines, classically paired foods and refreshing beers.
                                Our selections are ever-changing so be sure to come in and check out what we have on our daily specials!

                            <br/><br/>
                             Not sure what you fancy? Just ask and we'll find something that suits you. </p>
                            <button type="button" onClick={() => {window.location.href='/menus'}}>View Menus</button>
                        </div>
                    </div>
                    <div className='locationHome'>
                        <div className='sideBarL'>
                            <h3>Hours</h3>
                                <table>
                                    <tr><th>Monday</th><td>Closed</td></tr>
                                    <tr><th>Tuesday</th><td>3pm - 10pm</td></tr>
                                    <tr><th>Wednesday</th><td>3pm - 10pm</td></tr>
                                    <tr><th>Thursday</th><td>3pm - 10pm</td></tr>
                                    <tr><th>Friday</th><td>3pm - 10pm</td></tr>
                                    <tr><th>Saturday</th><td>3pm - 10pm</td></tr>
                                    <tr><th>Sunday</th><td>Closed</td></tr>
                                </table>
                            <br />
                        </div>
                        <img src={food} alt='map' />
                    </div>
                    <Footer />
                </div>
            </body>
        )
    }
}

export default homePage;

