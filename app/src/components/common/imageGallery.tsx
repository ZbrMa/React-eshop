import { useState } from "react";
import './styles/imageGallery.css';

type Props = {
    images:string[];
}

export function ImageGallery({images}:Props) {
    const [active,setAcitve] = useState(0);

    const handleClick = (index:number) => {
        setAcitve(index);
    }

    return(
        <div className="image-gallery-container">
            <div className="image-gallery">
                {images.map((image,index)=>(
                    <img src={image} key={index} className={`gallery-item ${active === index? 'active' : ''}`} onClick={()=>handleClick(index)}/>
                ))}
            </div>
        </div>
    );
};