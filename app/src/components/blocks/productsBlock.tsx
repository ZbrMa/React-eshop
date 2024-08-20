import './styles/productsBlock.css';
import { useEffect, useState, useRef } from 'react';
import { Card } from '../common/card';
import { useGetProductsByCategory } from '../../api/fetchHooks';
import { ProductsGrid } from './productsGrid';
import { Dropdown } from '../common/dropdown';
import { Slider } from '../common/slider';
import { About } from './about';

export function ProductsBlock() {
    const [category,setCategory] = useState<number>(1);

    return (
        <>     
            <div className='product-container'>
                        <Card
                            image='/images/banner.jpg'
                            title='Pásky'
                            onClick={()=>setCategory(4)}
                            id={4}
                        />
                        <Card
                            image='/images/penezenka.jpeg'
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
