import { useNavigate } from "react-router-dom";
import React from "react";
import './styles/productCard.css';

type Props = {
    image:string,
    title:string,
    children?:React.ReactNode,
    price:number,
    id:number,
}

export function ProductCard({image,title,children,price,id}:Props) {

    const navigate = useNavigate();

    return(
        <div className="product-card-container" onClick={()=>navigate('/produkt',{state:{prodId:id}})}>
            <div className="product-card">
                <div className="product-card-img-container">
                    <img className="product-img" src={image}></img> 
                    <div className="product-card-overlay"></div>
                </div>
                <div className="product-desc">
                    <h1 className="product-title">{title}</h1>
                    {children &&(<div className="product-text">{children}</div>)}
                    <div className="product-price">{price} Kč</div>
                </div>
            </div>
        </div>
    );
}