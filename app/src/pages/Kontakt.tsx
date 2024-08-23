import { PageLayout } from "./layout";
import { BodyBlock } from "../components/blocks/bodyBlock";
import { ContactBlock } from "../components/blocks/contact";

export function Kontakt(){

    return(
        <PageLayout menuVariant="secondary">
            <BodyBlock>
                <ContactBlock></ContactBlock>
            </BodyBlock>
        </PageLayout>
    );
};