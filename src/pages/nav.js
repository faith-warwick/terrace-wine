import React, {Component} from 'react';
import '../css/all.css';
import Header from './header';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import styled from 'styled-components';
import '../css/nav.css';



export default class nav extends Component {
    render () {
        return (
            <div className='navBar'>
                <StyledLink to='/'>Home</StyledLink>    &emsp;&emsp;&emsp;
                <StyledLink to='/location'>Location & Hours</StyledLink> &emsp;&emsp;&emsp;
                <StyledLink to='/menus'>Menu</StyledLink>
                {/*&emsp;&emsp;&emsp;*/}
                {/*<StyledLink to='/about'>About Us</StyledLink>*/}
            </div>
        )
    }
};



const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
    color: #9B8A69;
  }
  &.active {
    color: #9B8A69;
  }
`;