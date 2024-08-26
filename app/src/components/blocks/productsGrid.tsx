import './styles/productsGrid.css';
import { ProductCard } from '../common/productCard';
import { IProduct } from '../../types/types';
import { ClipLoader } from 'react-spinners';

type Props = {
    products: IProduct[] | null,
    loading:boolean,
    error:boolean,
    
}

export function ProductsGrid({products,loading,error}:Props) {

        if (loading){
            return(
                <ClipLoader color='var(--primaryHover)' cssOverride={{margin:'0 auto'}}></ClipLoader>
            )
        }
        else if (error){
            <div>Nastala chyba</div>
        }
        else {
            return(
                <div className="products-grid">
                    {products && products.map((product,index)=>
                        <ProductCard key={index} image={product.obrazek} title={product.jmeno} price={product.cena} id={product.id}>
                            {product.popis}
                        </ProductCard>
                    )}
                </div>
            );    
        };

        return null;
}