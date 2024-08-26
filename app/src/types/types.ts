export interface IProduct {
    id:number;
    cena: number;
    jmeno:string;
    kategorie: string;
    popis: string;
    sex:number;
    obrazek:string;
    images:string[];
};

export interface IProductSize {
    velikost:string;
    delka:number;
    sirka:number;
    hloubka:number;
}


export interface INavigationLink<StateType = unknown> {
    link: string;
    paramName?: keyof StateType;
    param?: StateType[keyof StateType];
}

export interface IDropdownOption {
    label:string;
    value:number;
};

export interface ICategory {
    id: number;
    jmeno: string;
};

export interface IFilter {
    price:number[];
    sex:number[];
    category:number[];
}

export interface ISex {
    id:number;
    nazev:string;
};

export interface IContactForm {
    name:string;
    surname:string;
    email:string;
    phone:string;
    text:string;
};

export interface ITableColumn {
    head:string;
    data:any[];
};