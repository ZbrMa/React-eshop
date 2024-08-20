import { Slider, AutoSlider } from "./slider";
import { ProductCard } from "./productCard";
import './styles/news.css';
import { Button } from "./button";

export function News() {

    return(
        <div className="news">
            <div className="news-head">
                <div className="news-head-inner">
                    <div className='news-head-content'>
                        <h4>Novinky</h4>
                        <article className='news-head-text'>Podívej se, co je nového a krásného. Neváhej a kup.</article>
                    </div>
                <Button variant="ghost-secondary" link="/produkty">Zjistit víc</Button>
                </div>
            </div>
            <div className="news-slider">
                <AutoSlider smallDev={1} midDev={2} largeDev={2} extraDev={3}>
                    <ProductCard image="/images/banner.jpg" title="Peněženka" price={500} id={1}/>
                    <ProductCard image="/images/pasek.jpg" title="Pásek" price={500} id={2}/>
                    <ProductCard image="/images/batoh.jpg" title="Batoh" price={2000} id={3}/>
                    <ProductCard image="/images/penezenka.jpeg" title="Peněženka" price={700} id={4}/>
                </AutoSlider>
            </div>
        </div>
    );
};