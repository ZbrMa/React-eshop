import { useState } from 'react';
import './styles/sideNav.css';

export function SideNav(){

    const [active,setActive] = useState();

    return(
        <div className="side-nav">
            <div className="side-nav-inner">
                <ul className="side-nav-list">
                    <li className="side-nav-item">Úprava</li>
                    <li className="side-nav-item">Nový</li>
                </ul>
            </div>
        </div>
    );
};