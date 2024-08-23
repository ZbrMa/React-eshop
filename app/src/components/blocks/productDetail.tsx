import { useGetProduct, useGetProductSize, useGetCategories } from '../../hooks/fetchHooks';
import { useLocation } from "react-router-dom";
import './styles/productDetail.css';
import { useEffect, useState } from "react";
import { ProductSize, sexOptions } from "../../types/types";
import { VariantButton } from "../common/button";
import { ImageGallery } from "../common/imageGallery";
import { Tag } from "../common/tag";

export function ProductDetail(){
    const location = useLocation();
    const { prodId } = location.state || {};

    const {data:product,loading,error} = useGetProduct({prod:prodId});
    const {data:productSize,loading:sizeLoading,error:sizeError} = useGetProductSize({prod:prodId});
    const {data:categories,loading:categoriesLoading,error:categoriesError} = useGetCategories();

    const [sizeFilter, setSizeFilter] = useState<ProductSize | null>(null);
    const [activeSize, setActiveSize] = useState<string | null>(null);

    useEffect(() => {
        if (productSize && productSize.length > 0) {
            setSizeFilter(productSize[0]);
            setActiveSize(productSize[0].velikost);
        };
    }, [productSize]);

    const sizeChange = (value:string) => {
        const filteredSize = productSize?.find(size=>size.velikost === value);
        if(filteredSize) {
            setSizeFilter(filteredSize) ;
            setActiveSize(value);
        };
    };

    const images = [
        '/images/penezenka.jpeg',
        '/images/batoh.jpg',
        '/images/pasek.jpg',
        '/images/banner.jpg',
        '/images/penezenka.jpeg'
    ];

    if(loading || sizeLoading){
        return(
            <div>Načítám...</div>
        );
    };

    if(error || sizeError){
        return(
            <div>chyba</div>
        );
    };

    if(product && productSize){
        return(
            <div className="product-detail">
                <ImageGallery images={images}/>
                <div className="product-info">
                    <div className="product-info-top">
                        <div className="product-header">
                            <h1>{product.jmeno}</h1>
                            <ul className="tags">
                                <Tag link={{link:'/produkty',paramName:'categoryId',param:categories?.find(cat=>cat.jmeno === product.kategorie)?.id}}>{product.kategorie}</Tag>
                                <Tag link={{link:'/produkty',paramName:'sexId',param:product.sex}}>{sexOptions.find(sex => sex.value === product.sex)?.label}</Tag>
                            </ul>
                        </div>
                        <a className="product-about">{product.popis}</a>
                    </div>
                    <div className="product-psc">
                            <div className="product-color-container">
                                <h3>Barva</h3>
                                <div className="product-color">gdfgsdgdfggeggdfgadgad</div>  
                            </div>
                            <div className="product-price-container">
                                <p className="product-detail-price">{product.cena} kč </p>
                                <p className="product-add-info">Cena je uvedena bez poštovného</p> 
                            </div>
                        {sizeFilter && (
                            <div className="product-size-container">
                                <h3>Velikost</h3>
                                    <p className="product-add-info">Vyber si z nabízených veliksotí nebo mi napiš a domluvíme se na velikosti, která ti bude nejlépe sedět.</p>
                                    <ul className="product-size-buttons">
                                    {productSize.map((size) => (
                                        <VariantButton
                                            key={size.velikost}
                                            click={sizeChange}
                                            returnValue={size.velikost}
                                            size="small"
                                            isActive={activeSize === size.velikost}
                                        >
                                            {size.velikost}
                                        </VariantButton>
                                    ))}
                                    </ul>
                                    <div className="product-size-info">
                                    <p>Délka: <b>{sizeFilter.delka} cm</b></p>
                                    <p>Šířka: <b>{sizeFilter.sirka} cm</b></p>
                                    <p>Hloubka: <b>{sizeFilter.hloubka} cm</b></p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };
    
    return null;
};