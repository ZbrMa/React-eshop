import { BodyBlock } from "../components/blocks/bodyBlock";
import { ProductsGrid } from "../components/blocks/productsGrid";
import { PageLayout } from "./layout";
import { SideFilter } from "../components/blocks/sideFilter";
import { useEffect, useState } from "react";
import {useGetProductsByFilter } from "../hooks/fetchHooks";
import { useLocation } from "react-router-dom";
import { useFilter } from "../context/productFilter";

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

    const {data:products,loading:productsLoading,error:productsError} = useGetProductsByFilter(filter);

    return(
        <PageLayout menuVariant="secondary">
            
            <BodyBlock>
                <div className="products-layout">
                    <SideFilter isFixed initialFilter={initialFilter}></SideFilter>
                    <ProductsGrid products={products} loading={productsLoading} error={productsError}></ProductsGrid>
                </div>  
            </BodyBlock>
        </PageLayout>
        
    );
}