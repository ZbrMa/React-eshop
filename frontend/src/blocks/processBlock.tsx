import './styles/processBlock.css';
import { ProcessCard } from '../components/processCard';

export function ProcessBlock(){

    return(
        <div className='process-block'>
            {/*<ProcessCard title='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Quisque porta. Nunc auctor.' image='/images/banner.jpg' orientation='left'>
                Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Integer lacinia. 
            </ProcessCard>
            <ProcessCard title='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Quisque porta. Nunc auctor.' image='/images/banner.jpg' orientation='right'>
            Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
            Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Integer lacinia.
            </ProcessCard>
            <ProcessCard title='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Quisque porta. Nunc auctor.' image='/images/les.jpg' orientation='left'>
            Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
            Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Integer lacinia.
            </ProcessCard>*/}
            <ProcessCard title='Udržitelnost' image='/images/les.jpg'>
                Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Integer lacinia.
            </ProcessCard>
            <ProcessCard title='Ruční práce' image='/images/banner.jpg'>
                Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Integer lacinia.
            </ProcessCard>
            <ProcessCard title='S láskou' image='/images/batoh.jpg'>
                Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Integer lacinia.
            </ProcessCard>
        </div>
    );
}