import React, {Component} from 'react';
// import '../css/all.css';
// import '../css/location.css';
import Nav from './nav';
import Header from './header';
import Footer from './footer';
import inside from '../images/inside.jpg';
import wine from '../images/wiine.jpg';


export default class location extends Component {

    render () {
        return (
            <body>
                <div className='page'>
                    <Header />
                    <Nav/>

                    <div className='menusHome'>
                        <img src={wine} alt='inside' className='wine'/>
                        <div className='sideBar'>
                            <h3>Location</h3>
                            <p>
                                <a href="https://www.google.com/maps?rlz=1C5CHFA_enUS784US784&q=791+SE+Fidalgo+Ave+Oak+Harbor,+WA+98277&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjL66vZtprbAhU5FzQIHREmAcAQ_AUICigB"> 791 SE Fidalgo Ave Oak Harbor, WA 98277 </a>
                            </p>
                            <p>
                                Located in beautiful downtown Oak Harbor, we are just off Pioneer Way.
                                Come join us and take advantage of our cozy fireplace, couches and enjoy a fantastic glass of wine!
                            </p>
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
                        </div>
                        <img src={inside} alt='inside' />
                    </div>

                <Footer />
                </div>
            </body>
        )
    }
};