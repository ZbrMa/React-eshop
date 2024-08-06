import './styles/card.css';
import { Button } from './button';
import { useNavigate } from 'react-router-dom';

type Props = {
    image:string;
    title:string;
    link:string;
}

export function Card({image,title,link}:Props) {

    const navigation = useNavigate();

    return (
        <div className="card" style={{backgroundImage:`url(${image})`}} onClick={()=>navigation(link)}>
            <div className='card-overlay'>
                <div className='card-title'>
                    <div className='card-title-inner'>
                        {title} 
                        <Button>Zjistit více</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}