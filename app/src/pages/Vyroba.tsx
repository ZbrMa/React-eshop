import { BodyBlock } from "../components/blocks/bodyBlock";
import { Banner } from "../components/common/banner";
import { ProductsBlock } from "../components/blocks/productsBlock";
import { ProcessBlock } from "../components/blocks/processBlock";
import { PageLayout } from "./layout";
import { About } from "../components/blocks/about";
import { News } from "../components/common/news";
import { Manufacture } from "../components/blocks/manufacture";

export function Vyroba() {

    return(
        <PageLayout>
            <Banner imageUrl="/images/manufacture.webp"></Banner>
            <BodyBlock>
                <Manufacture></Manufacture>
            </BodyBlock>
        </PageLayout>
        
    );
}