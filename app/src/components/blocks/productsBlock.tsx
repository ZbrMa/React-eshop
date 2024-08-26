import './styles/productsBlock.css';
import { useState } from 'react';
import { Card } from '../common/card';
import { About } from './about';

export function ProductsBlock() {
    const [category,setCategory] = useState<number>(1);

    return (
        <>     
            <div className='product-container'>
                        <Card
                            image='/images/opasek.webp'
                            title='Pásky'
                            onClick={()=>setCategory(4)}
                            id={4}
                        />
                        <Card
                            image='/images/penezenka.webp'
                            title='Peněženky'
                            onClick={()=>setCategory(1)}
                            id={1}
                        />
                        <Card
                            image='/images/batoh.jpg'
                            title='Batohy'
                            onClick={()=>setCategory(2)}
                            id={2}
                        />
            </div>
            <About></About>
        </> 
    );
}
