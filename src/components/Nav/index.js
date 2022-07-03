import {  useEffect } from "react";

import './index.css';

const Nav = (props) => {

  const {
    selectedNavLink,
    setSelectedNavLink
  } = props;

  useEffect(() => {
    document.title = selectedNavLink
  }, [selectedNavLink]);

  return (
    <header className='box'>
      <div className='header row'>
          <h1 className="col-2">Edgar Nava</h1>
          <div className='col-6'>
                   <ul id='nav-links' className='row'>
                   
              <li className='col-2'>
                <a
                  className={`${selectedNavLink === 'About' && 'navActive'}`}
                  href="#about-me"
                  onClick={() =>
                    setSelectedNavLink('About')
                  }
                >About Me</a>
              </li>
              <li className='col-2'>
                <a
                  className={`${selectedNavLink === 'Portfolio' && 'navActive'}`}
                  href="#portfolio"
                  onClick={() =>
                    setSelectedNavLink('Portfolio')
                  }
                >Portfolio</a>
              </li>
              <li className='col-2'>
                <a
                  className={`${selectedNavLink === 'Contact' && 'navActive'}`}
                  href="#contact"
                  onClick={() =>
                    setSelectedNavLink('Contact')
                  }
                >Contact</a>
              </li>
              <li className='col-2'>
                <a
                  className={`${selectedNavLink === 'Resume' && 'navActive'}`}
                  href="#Resume"
                  onClick={() =>
                    setSelectedNavLink('Resume')
                  }
                >Resume</a>
              </li>
              
            </ul>
          </div>
      
      </div>
      <hr></hr>
    </header>
  )
}

export default Nav;