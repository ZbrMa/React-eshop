import { useApiPost, useApiGetNoParams,useApiPostOnPurpose } from '../api/apiConnect';
import { IProduct,ICategory, IProductSize, ISex, IContactForm } from '../types/types';

export const useGetProductsByFilter = (payload:{}) => {
    const {data, loading, error} = useApiPost<IProduct[]>('produkty',payload);
    return { data, loading, error};
};

export const useGetCategories = () => {
    const {data, loading, error} = useApiGetNoParams<ICategory[]>('kategorie');
    return { data, loading, error};
};

export const useGetSex = () => {
    const {data, loading, error} = useApiGetNoParams<ISex[]>('pohlavi');
    return { data, loading, error};
};

export const useGetProduct = (payload:{})=>{
    const {data,loading,error} = useApiPost<IProduct>('produkt_detail',payload);
    return { data, loading, error};
};

export const useGetProductSize = (payload:{})=>{
    const {data,loading,error} = useApiPost<IProductSize[]>('produkt_velikost',payload);
    return { data, loading, error};
};

export const useSendMessage = ()=>{
    const {data,loading,error,postData} = useApiPostOnPurpose<string>('send_message');
    return {data,loading,error,postData};
}