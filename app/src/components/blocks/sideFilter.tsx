import { useEffect, useState } from "react";
import { Category, IFilter } from "../../types/types";
import { Dropdown } from "../common/dropdown";
import { useGetCategories } from "../../hooks/fetchHooks";
import { sexOptions } from "../../types/types";
import './styles/sideFilter.css';
import { useFilter } from "../../context/productFilter";

type Props = {
    isFixed?:boolean,
    initialFilter?:IFilter,
};

export function SideFilter({isFixed = false,initialFilter}:Props) {
    const {filter,setFilter} = useFilter();
    const {data:categories,loading:categoriesLoading,error:categoriesError} = useGetCategories();

    const handleCategory = (newCategory:number[]) => {
        setFilter(({
            ...filter,
            category:newCategory
        }));
    };

    const handlePrice = (newPrice:number[]) => {
        setFilter(({
            ...filter,
            price:newPrice
        }));
    };

    const handleSex = (newSex:number[]) => {
        setFilter(({
            ...filter,
            sex:newSex
        }));
    };

    return(
        <div className="side-filter">
            <div className={`side-filter-inner ${isFixed ? 'sticky' : ''}`}>
                <h4>Filtr</h4>
                {categories && (
                    <Dropdown 
                        options={categories.map(category => ({
                            label: category.jmeno,
                            value: category.id,
                        }))}
                        placeholder="Kategorie" 
                        returnSelected={handleCategory} 
                        initialValue={initialFilter?.category}
                    />
                )}
                <Dropdown 
                    options={sexOptions} 
                    placeholder="Muž/žena" 
                    returnSelected={handleSex}
                    initialValue={initialFilter?.sex}
                />
                {categories && (
                    <Dropdown 
                        options={categories.map(category => ({
                            label: category.jmeno,
                            value: category.id,
                        }))}
                        placeholder="Cena" 
                        returnSelected={handlePrice} 
                        initialValue={initialFilter?.price}
                    />
                )}
            </div>
        </div>
    );
};