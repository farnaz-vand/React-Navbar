import React, { Component } from 'react';
import {MenueItems} from "./MenueItems"
import "./Navbar.css"
import {Button} from '../Button'
class Navbar extends Component {
  state = {clicked: false}
  handleClick = () => {
    this.setState({clicked :!this.setState.clicked})
  }
  return() {
    
    <nav className='NavbarItems'>
      <h1 className='Navbar-logo'>react<i className='fab fa-react'></i></h1>
      <div className='Menue-icon' onclick={this.handleClick}>
        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
 
      </div>
      <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenueItems.map((item ,index)=> {
           return (
              
      <li Key = {index}><a className={MenueItems.cName} href={item.URL}>
          {item.title}
         </a>
      </li> 
           )
}
        )}
      </ul>
      <button>sign up</button>
    </nav>
     }
}
export default Navbar