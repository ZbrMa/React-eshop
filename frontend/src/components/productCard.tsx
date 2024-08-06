import { Button } from "./button";
import React from "react";
import './styles/productCard.css';

type Props = {
    image:string,
    title:string,
    children:React.ReactNode,
    price:number,
}

export function ProductCard({image,title,children,price}:Props) {

    return(
        <div className="product-card">
            <img className="product-img" src={image}></img> 
            <div className="product-desc">
                <h1 className="product-title">{title}</h1>
                <div className="product-text">{children}</div>
            </div>
            <div className="product-nav">
                {price} Kč
                <Button variant="secondary">Mám zájem</Button>
            </div>
        </div>
    );
}