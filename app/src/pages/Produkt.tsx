import { BodyBlock } from "../components/blocks/bodyBlock";
import { PageLayout } from "./layout";
import { ProductDetail } from "../components/blocks/productDetail";

export function Produkt() {

    return(
        <PageLayout menuVariant="secondary">
            <BodyBlock>
                <ProductDetail></ProductDetail>
            </BodyBlock>
        </PageLayout>
    );
}