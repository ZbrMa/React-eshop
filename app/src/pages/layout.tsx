import { Menu } from "../components/blocks/menu";
import { Footer } from "../components/blocks/footer";
import React from "react";

type Props = {
    children:React.ReactNode;
    menuVariant?:'primary' | 'secondary';
}
export function PageLayout({children,menuVariant='primary'}:Props) {

    return(
        <>
            <Menu variant={menuVariant}></Menu>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}