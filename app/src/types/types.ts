export interface Product {
    id:number;
    cena: number;
    obrazek: string;
    jmeno:string;
    kategorie: string;
    popis: string;
    sex:number;
};

export interface ProductSize {
    velikost:string;
    delka:number;
    sirka:number;
    hloubka:number;
}


export interface NavigationLink<StateType = unknown> {
    link: string;
    paramName?: keyof StateType;
    param?: StateType[keyof StateType];
}

export interface DropdownOption {
    label:string;
    value:number;
};

export interface Category {
    id: number;
    jmeno: string;
};

export interface IFilter {
    price:number[];
    sex:number[];
    category:number[];
}

export interface ISex {
    value:number,
    label:string,
};

export const sexOptions:ISex[] = [
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