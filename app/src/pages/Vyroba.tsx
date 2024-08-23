import { BodyBlock } from "../components/blocks/bodyBlock";
import { Banner } from "../components/common/banner";
import { PageLayout } from "./layout";
import { Manufacture } from "../components/blocks/manufacture";

export function Vyroba() {

    return(
        <PageLayout>
            <Banner text="Jak vlastně všechny produkty vznikají?" imageUrl="/images/manufacture.webp">Výroba</Banner>
            <BodyBlock>
                <Manufacture></Manufacture>
            </BodyBlock>
        </PageLayout>
        
    );
}