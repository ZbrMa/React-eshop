import './styles/aboutCard.css';

type Props = {
    title:string;
    children:React.ReactNode
}

export function AboutCard({title,children}:Props){

    return(
        <div className='about-card'>
            <div className='about-card-content'>
                <h1>{title}</h1>
                <article className='about-card-text'>{children}</article>
            </div>
        </div>
    )
}