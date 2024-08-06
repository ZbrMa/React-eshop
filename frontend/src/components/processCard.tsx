import React, { useState } from "react";
import './styles/processCard.css';
import { Button } from "./button";

type Props = {
    title:string,
    children:React.ReactNode,
    image:string,
}

export function ProcessCard({title,children,image}:Props) {

    const [flipped,setFlipped] = useState(false);
    
    return (
        <div className={`process-card ${flipped ? 'flipped' : ''}`} onMouseEnter={()=>setFlipped(true)} onMouseLeave={()=>setFlipped(false)}>
            <div className="process-card-inner">
                <div className="process-front" style={{backgroundImage:`url(${image})`}}>
                    {title}
                    <Button click={()=>setFlipped(true)}>Ukaž více</Button>
                </div>
                <div className="process-back" style={{backgroundImage:`url(${image})`}}>
                    <div className="process-back-shadow">
                        <h1>{title}</h1>
                        <div className="process-text">{children}</div>
                        <Button click={()=>setFlipped(false)}>X</Button>
                    </div>
                </div>
            </div>
        </div>
    );    
}