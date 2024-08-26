import { BodyBlock } from "../components/blocks/bodyBlock";
import { PageLayout } from "./layout";
import { Table } from "../components/common/table";
import { useGetProductsByFilter,useGetSex,useGetCategories } from "../hooks/fetchHooks";
import { useFilter } from "../context/productFilter";
import { IProduct, ITableColumn } from "../types/types";
import { Input } from "../components/common/input";
import {  useEffect, useState } from "react";
import { Dropdown } from "../components/common/dropdown";
import { useNavigate } from "react-router-dom";
import '../components/sprava.css';
import { IoTrashBin } from "react-icons/io5";
import { IProductSize } from "../types/types";

interface NewProduct {
    jmeno:string;
    kategorie:number;
    pohlavi:number;
    cena:number;
    popis:string;
}

export function Sprava(){
    const {filter,setFilter} = useFilter();
    const [productInfo,setProductInfo] = useState<IProduct | null>(null);
    const [active,setActive] = useState('edit');
    const [newProduct,setNewProduct] = useState<NewProduct>({jmeno:'',kategorie:0,pohlavi:0,cena:0,popis:''});
    const [pics,setPics] = useState<string[]>([]);
    const [sizes,setSizes] = useState<IProductSize[]>([]);

    const navigate = useNavigate();

    const {data:products,loading:productsLoading,error:productsError} = useGetProductsByFilter(filter);
    const {data:categories,loading:categoriesLoading,error:categoriesError} = useGetCategories();
    const {data:sexOptions,loading:sexLoading,error:sexError} = useGetSex();

    const handleRowClick = (rowData:number) => {
        const filteredProd = products?.find(prod=>prod.id===rowData);
        if (filteredProd){
            setProductInfo(filteredProd);
        };        
    };

    const columns:ITableColumn[] = [
        {
            head:'Id',
            data:products?.map(prod=>prod.id) || [],
        },
        {
            head:'Název',
            data:products?.map(prod=>prod.jmeno) || [],
        }
    ];

    const handleFormInputChange = (param: keyof NewProduct, value: any) => {
        setNewProduct(prev=>({
            ...prev,
            [param]:value,
        }));
    };

    const handleFileAdd =(event: React.ChangeEvent<HTMLInputElement>)=>{
        const file = event.target.files?.[0];
        if (file) {
            setPics([...pics,file.name]);
        };
    };

    const handleRemovePic = (pic:string) =>{
        const index = pics.indexOf(pic);
        var array = [...pics];
        if (index !== -1) {
            array.splice(index, 1);
            setPics(array);
        };
    };

    return(
        <PageLayout menuVariant="secondary">
            <BodyBlock style={{marginBottom: '-48px'}}>
                <div className="sub-nav">
                    <div className="sub-nav-inner">
                        <ul className="sub-nav-list">
                            <li className="sub-nav-item" onClick={()=>setActive('edit')}>Úprava</li>
                            <li className="sub-nav-item" onClick={()=>setActive('new')}>Nový</li>
                        </ul>
                    </div>
                </div>
            </BodyBlock>
            {active === 'edit' &&(
                <BodyBlock>
                    <Table columns={columns} loading={productsLoading} error={productsError} rowClick={handleRowClick}>Seznam produktů</Table>
                    {productInfo ? (
                        <form>
                            <Input placeholder="Název" placeholderPosition="outside" type="text" returnValue={(e)=>setProductInfo({...productInfo,jmeno:e.target.value})}></Input>
                            <Input placeholder="Cena" placeholderPosition="outside" type="number" returnValue={(e)=>setProductInfo({...productInfo,cena:parseInt(e.target.value)})}></Input>
                            {sexOptions &&(<Dropdown 
                                            placeholder="Pohlaví" 
                                            options={sexOptions.map(category => ({
                                                label: category.nazev,
                                                value: category.id,
                                            }))} 
                                            multiSelect = {false}
                                            returnSelected={(e)=>setProductInfo({...productInfo,sex:e[0]})}
                                            />

                                        )}
                            {categories &&(<Dropdown 
                                            placeholder="Kategorie" 
                                            options={categories.map(category => ({
                                            label: category.jmeno,
                                            value: category.id,
                                            }))}
                                            multiSelect = {false}
                                            returnSelected={(e)=>setProductInfo({...productInfo,kategorie:e[0].toString()})}
                                        />)}
                        </form>
                    ):(
                        <div>Vyber produkt</div>
                    )}
                </BodyBlock>
            )}
            {active === 'new' &&(
                <BodyBlock>
                    <div className="new-prod-container">
                        <div className="new-prod-left">
                            <h2>Základní informace</h2>
                            <form className="new-prod-form">
                                <label>Název</label>
                                <Input type="text" placeholder="Název" returnValue={(e)=>handleFormInputChange('jmeno',e.target.value)}/>
                                <label>Cena</label>
                                <Input type="number" placeholder="Cena" returnValue={(e)=>handleFormInputChange('cena',e.target.value)}/>
                                <label>Kategorie</label>
                                {categories && (
                                    <Dropdown 
                                        options={categories.map(category => ({
                                            label: category.jmeno,
                                            value: category.id,
                                        }))}
                                        placeholder="Kategorie" 
                                        returnSelected={(e)=>handleFormInputChange('kategorie',e[0])} 
                                        multiSelect={false}
                                    />
                                )}
                                <label>Pohlaví</label>
                                {sexOptions && (
                                    <Dropdown 
                                        options={sexOptions.map(category => ({
                                            label: category.nazev,
                                            value: category.id,
                                        }))} 
                                        placeholder="Muž/žena" 
                                        returnSelected={(e)=>handleFormInputChange('pohlavi',e[0])} 
                                        multiSelect={false}
                                    />
                                )}
                                <div className="textarea-container">
                                    <textarea key={1} placeholder="Popis produktu"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="new-prod-center">
                            <h2>Obrázky</h2>
                            <div className="new-prod-pic-container">
                                {pics.length>0 && pics.map((pic,index)=>(
                                    <div className="new-pic">
                                        <a key={index}>{pic}</a>
                                        <IoTrashBin onClick={()=>handleRemovePic(pic)}></IoTrashBin>
                                    </div>
                                ))}
                            {pics.length < 5 ? (
                                <label className="file-upload">
                                    <input type="file" multiple={false} onChange={handleFileAdd} name="fileToUpload" id="fileToUpload"/>
                                    +
                                </label>
                            ):(
                                <a className="max-num">Dosaženo maximálního počtu obrázků.</a>
                            )}
                            </div>
                        </div>
                        <div className="new-prod-right">
                            <h2>Velikosti</h2>
                        </div>
                    </div>
                </BodyBlock>
            )}
        </PageLayout>
    );
};