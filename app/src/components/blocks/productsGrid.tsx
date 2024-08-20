import './styles/productsGrid.css';
import { ProductCard } from '../common/productCard';
import { Product } from '../../types/types';

type Props = {
    products: Product[] | null,
    loading:boolean,
    error:boolean,
    
}

export function ProductsGrid({products,loading,error}:Props) {

        return(
            <div className="products-grid">
                {loading? (
                    <div>Načítám...</div>
                ):(
                    error? (
                        <div>Chyba!</div>
                    ):(
                        products && products.map((product,index)=>
                            <ProductCard image={product.obrazek} title={product.jmeno} price={product.cena} id={product.id}/>
                        )
                    )
                )}
            </div>
        );    
}