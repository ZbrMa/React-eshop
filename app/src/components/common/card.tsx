import './styles/card.css';
import { Button } from './button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
    image:string;
    title:string;
    onClick:()=>void;
    id:number;
}

export function Card({id,image,title,onClick}:Props) {
    const [active,setActive] = useState(false);
    const navigate = useNavigate();
    const handleClick = () =>{
        onClick();
        setActive(true);
        navigate('/produkty',{
            state:{
                categoryId:id,
            }
        });
    };

    return (
        <div className="card" style={{backgroundImage:`url(${image})`}} onClick={handleClick}>
            <div className='card-overlay'>
                <div className='card-title'>
                    <div className='card-title-inner'>
                        {title} 
                        <Button variant='ghost'>Zjistit více</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}