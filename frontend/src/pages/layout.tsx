import { Menu } from "../blocks/menu";
import { Footer } from "../blocks/footer";
import React from "react";

type Props = {
    children:React.ReactNode;
}
export function PageLayout({children}:Props) {

    return(
        <>
            <Menu></Menu>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}