import React from "react";
import './styles/manufactureCard.css';

type Props = {
    title:string,
    children:React.ReactNode,
    position:'top' | 'center' | 'bottom',
    image:string,
}

export function ManufactureCard({title,children,position,image}:Props){

    return(
        <div className={`manf-card ${position}`}>
            <img className='manf-card-img' src={image}></img>
            <div className="manf-card-text">
                <h3>{title}</h3>
                <article>{children}</article>
            </div>
        </div>
    );
};