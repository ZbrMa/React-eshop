import './styles/infoLine.css';

type Props = {
    title:string,
    children:React.ReactNode,
};

export function InfoLine({title,children}:Props){

    return(
        <div className="info-line">
            <div className="info-line-title">{title}</div>
            <div className="info-line-content">{children}</div>
        </div>
    );
};