import { IFilter } from "../../types/types";
import { Dropdown } from "../common/dropdown";
import { useGetCategories,useGetSex } from "../../hooks/fetchHooks";
import './styles/sideFilter.css';
import { useFilter } from "../../context/productFilter";
import { ClipLoader } from "react-spinners";

type Props = {
    isFixed?:boolean,
    initialFilter?:IFilter,
};

export function SideFilter({isFixed = false,initialFilter}:Props) {
    const {filter,setFilter} = useFilter();
    const {data:categories,loading:categoriesLoading,error:categoriesError} = useGetCategories();
    const {data:sexOptions,loading:sexLoading,error:sexError} = useGetSex();

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

    if (categoriesLoading || sexLoading) {
        return(
            <ClipLoader color='var(--primaryHover)' cssOverride={{margin:'0 auto'}}></ClipLoader>
        )
    }

    else if(categoriesError || sexError) {
        <div className="side-filter">
            <div className={`side-filter-inner ${isFixed ? 'sticky' : ''}`}>
                <h4>Filtr</h4>
                <div>Vyskytla se chyba</div>
            </div>
        </div>
    }
    else {
        return(
            <div className="side-filter">
                <div className={`side-filter-inner ${isFixed ? 'sticky' : ''}`}>
                    <h2>Filtr</h2>
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
                    {sexOptions && (
                        <Dropdown 
                        options={sexOptions.map(category => ({
                            label: category.nazev,
                            value: category.id,
                        }))} 
                        placeholder="Muž/žena" 
                        returnSelected={handleSex}
                        initialValue={initialFilter?.sex}
                        />
                    )}
                    
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
    return null;
};