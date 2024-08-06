import React, { useState,useEffect } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import './styles/tooltip.css';

type Position = 'up' | 'down' | 'left' | 'right';

type Props = {
    children:string;
    position?:Position;
}

export function Tooltip({children,position='up'}:Props) {
    const[active,setActive] = useState(false);

    const getPosition = (position:Position):React.CSSProperties => {
        const style: React.CSSProperties = {};
        switch(position){
            case 'up':
                style.top = '-3rem';
                style.left = '50%';
                break;
            case 'down':
                style.bottom = '-3rem';
                style.left = '50%';
                break;
            case 'left':
                style.right = '100%';
                style.bottom = '0';
                break;
            case 'right':
                style.left = '100%';
                style.bottom = '0';
                break;
            default:
                break;
        }
        
        return style;
    };

        return(
            <div className="tooltip">
                <IoInformationCircleOutline className="tooltip-trigger" onMouseEnter={()=>setActive(true)} onMouseLeave={()=>setActive(false)}></IoInformationCircleOutline>
                    <div className={`tooltip-content ${active? 'open' : ''}`} style={getPosition(position)}>
                        <div className="tooltip-text">{children}</div>
                    </div>
            </div>
        );
}