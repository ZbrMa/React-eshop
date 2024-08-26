import './styles/manufacture.css';
import { ManufactureCard } from '../common/manufactureCard';
import { AutoSlider, Slider } from '../common/slider';

export function Manufacture() {

    return(
        <>
            <div className="manf-container">
                <h1 className='manf-header'>Preciznost</h1>
                <p className='manf-header-text'>Senectus et netus et malesuada fames ac turpis egestas.</p>
                <div className='manf-cards'>
                    <ManufactureCard title='Přesnost' position='center' image='/images/penezenka.webp'>
                        Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                        Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu.
                    </ManufactureCard>
                    <ManufactureCard title='Pečlivost' position='bottom' image='/images/taska.webp'>
                        Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                        Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu.
                    </ManufactureCard>
                    <ManufactureCard title='Dokonalost' position='top' image='/images/banner.jpg'>
                        Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                        Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu.
                    </ManufactureCard>
                </div>
            </div>
            <div className='manf-slider'>
                <AutoSlider extraDev={3} largeDev={3} midDev={3} smallDev={2} styles={{height:'auto',marginBottom:'64px', borderRadius:'var(--border-radius)',overflow:'hidden'}}>
                    <img className='manf-slider-img' src='/images/banner.jpg'></img>
                    <img className='manf-slider-img' src='/images/taska.webp'></img>
                    <img className='manf-slider-img' src='/images/penezenka.webp'></img>
                    <img className='manf-slider-img' src='/images/penezenka.webp'></img>
                    <img className='manf-slider-img' src='/images/opasek.webp'></img>
                    <img className='manf-slider-img' src='/images/penezenka.jpeg'></img>
                </AutoSlider>
            </div>
            <div className="manf-container">
            <h1 className='manf-header'>Přirodní materiály</h1>
            <p className='manf-header-text'>Senectus et netus et malesuada fames ac turpis egestas.</p>
            <div className='manf-cards'>
                <ManufactureCard title='Přírodní kůže' position='top' image='/images/penezenka.webp'>
                    Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                    Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu.
                </ManufactureCard>
                <ManufactureCard title='Žádná chemie' position='center' image='/images/opasek.webp'>
                    Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                    Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu.
                </ManufactureCard>
                <ManufactureCard title='Paráda' position='bottom' image='/images/penezenka.jpeg'>
                    Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                    Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu.
                </ManufactureCard>
            </div>
        </div>
    </>
    );
};