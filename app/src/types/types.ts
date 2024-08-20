export interface Product {
    id:number;
    cena: number;
    obrazek: string;
    jmeno:string;
    kategorie: string;
    popis: string;
};

export interface ProductSize {
    velikost:string;
    delka:number;
    sirka:number;
    hloubka:number;
}

export interface Category {
    id: number;
    jmeno: string;
};

export interface DropdownOption {
    label:string;
    value:string | number;
};

export interface IFilter {
    price:number[];
    sex:number[];
    category:number[];
}