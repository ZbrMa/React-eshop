import { Button } from './button';
import './styles/banner.css';

type Props = {
    imageUrl:string,
    height?:'full' | 'half',
    children:React.ReactNode,
    text?:string,
};

export function Banner({imageUrl,height='full',children,text}:Props) {

    return(
        <div className={`banner ${height}`} style={{backgroundImage:`url(${imageUrl})`,height:`${height === 'full' ? '100vh' : '50vh'}`}}>
            <div className='banner-overlay'>
                <div className="banner-inner">
                    <div className="banner-content">
                        <div className="banner-header">{children}</div>
                        {text && (<div className="banner-text">{text}</div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}