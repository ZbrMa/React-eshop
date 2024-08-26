import { AboutCard } from '../common/aboutCard';
import { Button } from '../common/button';
import './styles/about.css';

export function About(){

    return(
        <div className="about-container">
            <div className="about-banner"> 
                <img className="about-img" src="/images/banner.jpg" alt="aboutimage"></img>
                <div className="about-content">
                    <div className='about-content-text'>
                        <h1>O mě</h1>
                        <article className="about-article">Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                        Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Integer lacinia.
                        Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                        Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Integer lacinia.
                        Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                        </article>
                    </div>
                    <Button variant='ghost-secondary'>Kontakt</Button>
                </div>
            </div>
            <div className='about-cards'>
                <AboutCard title='Udržitelnost'>Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                    Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Integer lacinia.
                    Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                </AboutCard>
                <AboutCard title='Příroda'>Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                    Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Integer lacinia.
                    Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                </AboutCard>
                <AboutCard title='Ruční práce'>Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                    Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Integer lacinia.
                    Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                </AboutCard>
            </div>
        </div>
    )
}