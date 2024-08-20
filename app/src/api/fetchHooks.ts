import { useApiPost, useApiGetNoParams } from './apiConnect';
import { Product,Category, ProductSize } from '../types/types';
import { IUser } from '../types/user';
import { useEffect } from 'react';
import { store } from '../store/store';

export const useGetProductsByCategory = (payload:{}) => {
    const {data, loading, error} = useApiPost<Product[]>('produkty',payload);
    return { data, loading, error};
};

export const useGetCategories = () => {
    const {data, loading, error} = useApiGetNoParams<Category[]>('kategorie');
    return { data, loading, error};
};

export const useGetProduct = (payload:{})=>{
    const {data,loading,error} = useApiPost<Product>('produkt_detail',payload);
    return { data, loading, error};
};

export const useGetProductSize = (payload:{})=>{
    const {data,loading,error} = useApiPost<ProductSize[]>('produkt_velikost',payload);
    return { data, loading, error};
};