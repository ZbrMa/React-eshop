import { useEffect, useState } from "react";
import { Category, IFilter } from "../../types/types";
import { Dropdown } from "../common/dropdown";
import { useGetCategories } from "../../api/fetchHooks";
import { DropdownOption } from "../../types/types";
import './styles/sideFilter.css';
import { useFilter } from "../../context/productFilter";

type Props = {
    isFixed?:boolean,
    initialState?:IFilter,
}

export function SideFilter({isFixed = false,initialState}:Props) {
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

    const sexOptions = [
        {
            label:'Unisex',
            value:0,
        },
        {
            label:'Žena',
            value:1,
        },
        {
            label:'Muž',
            value:2,
        }
    ];

    return(
        <div className="side-filter">
            <div className={`side-filter-inner ${isFixed ? 'sticky' : ''}`}>
                <h4>Filtr</h4>
                <Dropdown options={categories?.map(category => {return{label:category.jmeno, value:category.id}})} placeholder="Kategorie" returnSelected={handleCategory} initialValue={filter.category}></Dropdown>
                <Dropdown options={sexOptions} placeholder="Muž/žena" returnSelected={handleSex}></Dropdown>
                <Dropdown options={categories?.map(category => {return{label:category.jmeno, value:category.id}})} placeholder="Cena" returnSelected={handlePrice}></Dropdown>
            </div>
        </div>
    );
};