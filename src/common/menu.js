import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import Home from '../home/home';
import Television from '../television/television';
import hamburger from '../assets/images/hamburger.png';
import '../App.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        this.setState({show: !this.state.show});
    }

    render() {
        return (
            <div id='menuContainer'>
                {/*======== TODO: set up hamburger menu for mobile */}
                {/* <img src={hamburger} id='hamburgerMenu' alt='menu' onClick={this.toggleMenu}/> */}
                {/* <div className={this.state.show ? 'menuSheet' : 'menuSheet hidden'}> */}
                <div className='menuSheet'>
                    <NavLink exact to='/'>Home</NavLink>
                    <NavLink exact to='/shows'>Shows</NavLink>
                </div>
                <div className='content'>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/shows' component={Television}/>
                </div>
            </div>
        )
    }
}

export default Menu;