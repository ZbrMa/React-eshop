import { BodyBlock } from "../blocks/bodyBlock";
import { Banner } from "../components/banner";
import { Menu } from "../blocks/menu";
import { ProductsBlock } from "../blocks/productsBlock";
import { ProductModal } from "../modals/productModal";
import { ProcessBlock } from "../blocks/processBlock";
import { PageLayout } from "./layout";

export function Domu() {

    return(
        <PageLayout>
            <Banner></Banner>
            <BodyBlock title="Produkty" id="products">
                    <ProductsBlock></ProductsBlock>
                </BodyBlock>
                <BodyBlock variant="secondary" title="Jak se výrobky vyrábějí" id="process">
                    <ProcessBlock></ProcessBlock>
                </BodyBlock>
        </PageLayout>
        
    );
}