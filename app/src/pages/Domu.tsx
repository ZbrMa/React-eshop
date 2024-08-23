import { BodyBlock } from "../components/blocks/bodyBlock";
import { Banner } from "../components/common/banner";
import { ProductsBlock } from "../components/blocks/productsBlock";
import { PageLayout } from "./layout";
import { News } from "../components/common/news";

export function Domu() {

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