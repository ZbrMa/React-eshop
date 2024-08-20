import { Button } from './button';
import './styles/banner.css';

type Props = {
    imageUrl:string,
    height?:'full' | 'half',
};

export function Banner({imageUrl,height='full'}:Props) {

    return(
        <div className={`banner ${height}`} style={{backgroundImage:`url(${imageUrl})`,height:`${height === 'full' ? '100vh' : '50vh'}`}}>
            <div className='banner-overlay'>
                <div className="banner-inner">
                    <div className="banner-content">
                        <div className="banner-header">Kožené výrobky z Valašska</div>
                        <div className="banner-text">Ručně dělané kožené výrobky z pravé kůže</div>
                    </div>
                </div>
            </div>
        </div>
    );
}