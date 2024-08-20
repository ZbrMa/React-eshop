import React, { createContext, useState, useContext} from "react";
import { IFilter } from "../types/types";

interface FilterContextProps {
    filter:IFilter,
    setFilter:(filter:IFilter)=>void,
};

export const FilterContext = createContext<FilterContextProps | undefined>(undefined);

type ProviderProps = {
    children:React.ReactNode,
};

export function FilterProvider({children}:ProviderProps){
    const [filter,setFilter] = useState<IFilter>({category:[],sex:[],price:[]})

    return(
        <FilterContext.Provider value={{filter,setFilter}}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error('useFilter must be used within a FilterProvider');
    }
    return context;
};