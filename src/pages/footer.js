import React, {Component} from 'react';
import '../css/feet.css';
import Yelp from '../images/Yelp_trademark_RGB_outline.png';
import FB from '../images/FB-FindUsonFacebook-online-144.png'

export default class footer extends Component {
    render () {
        return (
                <div className='logos'>
                    <a href='https://www.yelp.com/biz/the-terrace-wine-bar-and-bistro-oak-harbor' target="_blank"> <img src={Yelp} alt='Yelp'/> </a>
                    <a href="https://www.google.com/maps?rlz=1C5CHFA_enUS784US784&q=791+SE+Fidalgo+Ave+Oak+Harbor,+WA+98277&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjL66vZtprbAhU5FzQIHREmAcAQ_AUICigB"> 791 SE Fidalgo Ave Oak Harbor, WA 98277 </a>
                    <a href='https://www.facebook.com/TheTerraceWineBarAndBistro/' target="_blank" className='FB'> <img src={FB} alt='Facebook'/> </a>
                </div>
        )
    }
};