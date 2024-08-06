import './styles/productsBlock.css';
import { useState } from 'react';
import { Card } from '../components/card';
import { ProductModal } from '../modals/productModal';

export function ProductsBlock() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<{ title: string; desc: string } | null>(null);

    const handleCardClick = (title: string, desc: string) => {
        setSelectedProduct({ title, desc });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <>
            <div className='product-block-text'>Zde jsou výrobky, které vyrábím. Rozklikni si kategorii a podívej se na to, co tě zajímá nejvíc.</div>
            <div className="products">
                <Card
                    image='/images/banner.jpg'
                    title='Pásky'
                    link='/produkt'
                />
                <Card
                    image='/images/penezenka.jpeg'
                    title='Peněženky'
                    link='/produkt'
                />
                <Card
                    image='/images/batoh.jpg'
                    title='Batohy'
                    link='/produkt'
                />
                <Card
                    image='/images/pasek.jpg'
                    title='Pásky'
                    link='/produkt'
                />
            </div>
            {isModalOpen && selectedProduct && (
                <ProductModal
                    product={selectedProduct.title}
                    desc={selectedProduct.desc}
                    isOpened={isModalOpen}
                    close={closeModal}
                />
            )}
        </>
    );
}
