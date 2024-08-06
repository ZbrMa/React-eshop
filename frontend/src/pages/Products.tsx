import { BodyBlock } from "../blocks/bodyBlock";
import { Banner } from "../components/banner";
import { Menu } from "../blocks/menu";
import { ProductsGrid } from "../blocks/productsGrid";
import { Tooltip } from "../components/tooltip";
import { PageLayout } from "./layout";

export function Products() {

    return(
        <PageLayout>
            <Banner></Banner>
            <BodyBlock title="Produkty">
                <>
                <div className="some-text" style={{display: 'flex', marginBottom: '16px',fontSize: '1.2rem',justifyContent: 'space-between'}}>
                    Zde jsou výrobky, jejichž výroba je již zvládnuta a není problém nějaký objednat. 
                    <Tooltip position="left">Objdnávky jsou příjímány emailem nebo telefonicky</Tooltip>
                </div>
                <ProductsGrid></ProductsGrid>
                </>
            </BodyBlock>
        </PageLayout>
    );
}