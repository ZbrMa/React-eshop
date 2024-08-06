import './styles/productsGrid.css';
import { ProductCard } from '../components/productCard';

export function ProductsGrid() {

    return(
        <div className="products-grid">
            <ProductCard image='/images/batoh.jpg' title='Batoh' price={2000}>
                Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Integer lacinia.
            </ProductCard>
            <ProductCard image='/images/penezenka.jpeg' title='Peněženka' price={500}>
                Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Integer lacinia.
            </ProductCard>
            <ProductCard image='/images/pasek.jpg' title='Dámský pásek' price={200}>
                Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Integer lacinia.
            </ProductCard>
            <ProductCard image='/images/pasek.jpg' title='Dámský pásek deluxe' price={500}>
                Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Integer lacinia.
            </ProductCard>
            <ProductCard image='/images/batoh.jpg' title='Batoh' price={2000}>
                Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Integer lacinia.
            </ProductCard>
            <ProductCard image='/images/penezenka.jpeg' title='Peněženka' price={500}>
                Senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. 
                Etiam dictum tincidunt diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Integer lacinia.
            </ProductCard>
        </div>
    );
}