import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component{
    pageIsSelected(currentPage, checkPage)
    {
        if(currentPage === checkPage)
        {
            return "selected-page"
        }
        return ""
    }

    render() {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos < (currentScrollPos +1)) {
            if(currentScrollPos > 90)
            {
                (document.getElementById("header-container")).style.top="-90px";
            }
            else{
                (document.getElementById("header-container")).style.top="-".concat(currentScrollPos,"px");
            }
            
        } else {
            (document.getElementById("header-container")).style.top="0" ;
        }
        prevScrollpos = currentScrollPos;
        }
        return (
            <div>
            <div id="header-container">
            <div className="tracker-backgound">
                <div className="header">
                    <div className="logo">
                    <Link className="logo-image" to="/">
                        {/* <img src={logoImage} className="logo-image" alt=""></img>  */}
                        </Link>
                        <Link className="logo-text" to="/">MAC FORMULA AUTONOMOUS</Link>
                    </div>

                    {/* <div className="spacer" /> */}
                    <input type="checkbox" className="toggle"></input>
                    <div className="hamburger"><div>
                    </div></div>
                    <ul className="nav-bar">               
                        <li className={`nav-bar-item ${this.pageIsSelected("about", this.props.page)}`}>
                             <Link to="/about">About</Link>
                        </li> 
                        <li className={`nav-bar-item ${this.pageIsSelected("recruitment", this.props.page)}`}>
                            <Link to="/recruitment">Recruitment</Link>
                        </li>   
                        <li className={`nav-bar-item ${this.pageIsSelected("sponsors", this.props.page)}`}>
                            <Link to="/sponsors">Sponsors</Link>
                        </li> 

                        <li className={`nav-bar-item ${this.pageIsSelected("contact", this.props.page)}`}>
                            <Link to="/contact">Contact</Link>
                        </li>
                        {/* <li className="nav-bar-item-donate-button"> */}
                        <li className={`nav-bar-item ${this.pageIsSelected("donate", this.props.page)}`}>
                        <Link to="/donate">Donate</Link>
                        </li>
                    </ul>
                </div>
                

                </div>
            </div>
            <div className="top-buffer"></div>
            </div>
        );
    }
}

export default Header;