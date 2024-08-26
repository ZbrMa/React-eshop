import { BodyBlock } from "../components/blocks/bodyBlock";
import { Banner } from "../components/common/banner";
import { ProductsBlock } from "../components/blocks/productsBlock";
import { PageLayout } from "./layout";
import { News } from "../components/common/news";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function Domu() {

    const location = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0);
    },[location])

    return(
        <PageLayout>
            <Banner text="Kvalitní ruční práce odvedená s láskou" imageUrl="/images/banner.webp">Ručně vyráběné kožené výrobky</Banner>
            <BodyBlock id="products">
                    <News></News>
                    <ProductsBlock></ProductsBlock>
            </BodyBlock>
        </PageLayout>
        
    );
}