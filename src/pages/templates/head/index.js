import React from 'react'

import './style-Head.css';

//import './../styleMain.css';

//import Logo  from './../../../assets/logo.png';
//import Logopb  from './../../../assets/logopb.png';


export default function Head() {
    return (
        <>

            <div className="navM">	
			    <header>
                    <nav>
                        <ul className="menu">
                            <li className="logo">Logo</li>
                            <li className="right"><a href="#top"><i className="material-icons" title="Menu/User">apps</i><br/>Menu</a></li>
                        </ul>
                    </nav>
			    </header>
		    </div>

        </>
    )
}