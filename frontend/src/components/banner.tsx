import { Button } from './button';
import './styles/banner.css';

export function Banner() {

    return(
        <div className="banner">
            <div className="banner-inner">
                <div className="banner-content">
                    <div className="banner-header">Kožené výrobky z Valašska</div>
                    <div className="banner-text">Ručně dělané kožené výrobky z pravé kůže</div>
                </div>
                <Button>Zjisit více</Button>
            </div>
        </div>
    );
}