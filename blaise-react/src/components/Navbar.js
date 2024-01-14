import React from 'react'
import Aboutme from './buttons/AboutMeButton'
import Contact from './buttons/ContactButton'
import Project from './buttons/ProjectButton'

function Navbar() {



    return (
  
          <div className="w-full h-screen bg-gradient-to-r from-indigo-500 from-33% via-purple-500 via-33% to-pink-500 to-33%">
            <div id="nav-bar" className="fixed w-full h-32  flex items-stretch">
              <ul className=" text-2xl font-semibold text-white menu menu-vertical lg:menu-horizontal  rounded-full h-1/2 w-1/2 m-auto self-center bg-gradient-to-r from-pink-500 from-33% via-purple-500 via-33% to-indigo-500 to-33%">
                <Project />
                <Aboutme />
                <Contact />
              </ul>
            </div>
          </div>
  
    );
  }

export default Navbar