import { BodyBlock } from "../components/blocks/bodyBlock";
import { PageLayout } from "./layout";
import { SideFilter } from "../components/blocks/sideFilter";
import { useEffect, useState } from "react";
import { useGetProductsByCategory } from "../api/fetchHooks";
import { ProductCard } from "../components/common/productCard";
import { useLocation } from "react-router-dom";
import { useFilter } from "../context/productFilter";
import { IFilter } from "../types/types";

export function Produkty() {
    const {filter,setFilter} = useFilter();
    const [initialFilter,setInitialFilter] = useState(filter);
    const location = useLocation();
    let categoryId = location.state?.categoryId ?? undefined;
    let sexId = location.state?.sexId ?? undefined;

    useEffect(()=>{
        if(categoryId)
        {
            setInitialFilter({
                ...initialFilter,
                category:[categoryId]
            });
        }; 
        if(sexId)
            {
                setInitialFilter({
                    ...initialFilter,
                    sex:[sexId]
                });
            }; 
    },[categoryId,sexId]);

    useEffect(()=>{
        setFilter(initialFilter);
    },[initialFilter]);

    const {data:products,loading:productsLoading,error:productsError} = useGetProductsByCategory(filter);

    return(
        <PageLayout menuVariant="secondary">
            
            <BodyBlock>
                <div className="products-layout">
                    <SideFilter isFixed initialFilter={initialFilter}></SideFilter>
                    {productsLoading&& (<div>Načítá</div>)}  
                    {productsError && (<div>Chyba!</div>)} 
                    {products &&(
                        <div className="products-content">
                        {products.map((product,index)=>(
                            <ProductCard key={index} image={product.obrazek} title={product.jmeno} price={product.cena} id={product.id}>{product.popis}</ProductCard>
                        ))}
                        </div>
                    )}
                </div>  
            </BodyBlock>
        </PageLayout>
        
    );
}