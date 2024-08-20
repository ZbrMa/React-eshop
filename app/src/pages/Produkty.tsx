import { BodyBlock } from "../components/blocks/bodyBlock";
import { PageLayout } from "./layout";
import { SideFilter } from "../components/blocks/sideFilter";
import { useEffect, useState, useContext } from "react";
import { IFilter } from "../types/types";
import { useGetProductsByCategory } from "../api/fetchHooks";
import { ProductCard } from "../components/common/productCard";
import { useLocation } from "react-router-dom";
import { useFilter } from "../context/productFilter";

export function Produkty() {
    const {filter,setFilter} = useFilter();
    const location = useLocation();
    let categoryId = location.state.categoryId;

    useEffect(()=>{
        console.log(categoryId);
        if(categoryId)
        {
            setFilter({
                ...filter,
                category:[categoryId]
            });
        }; 
    },[categoryId])

    const {data:products,loading:productsLoading,error:productsError} = useGetProductsByCategory(filter);

    return(
        <PageLayout menuVariant="secondary">
            
            <BodyBlock>
                <div className="products-layout">
                    <SideFilter isFixed></SideFilter>
                    {productsLoading&& (<div>Načítá</div>)}  
                    {productsError && (<div>Chyba!</div>)} 
                    {products &&(
                        <div className="products-content">
                        {products.map(product=>(
                            <ProductCard image={product.obrazek} title={product.jmeno} price={product.cena} id={product.id}>{product.popis}</ProductCard>
                        ))}
                        </div>
                    )}
                </div>  
            </BodyBlock>
        </PageLayout>
        
    );
}