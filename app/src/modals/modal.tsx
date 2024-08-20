import React, { useState, useEffect } from "react";
import { Button } from "../components/common/button";
import './styles/modal.css';
import { IoClose } from "react-icons/io5";

type Props = {
    header: string;
    children: React.ReactElement;
    isOpened: boolean;
    close: () => void;
}

export function Modal({ header, children, isOpened, close }: Props) {
    const [opened, setOpened] = useState(isOpened);

    useEffect(() => {
        setOpened(isOpened);
    }, [isOpened]);

    const handleClose = () => {
        setOpened(false);
        close();
    };

    return (
        <div className="modal-back" style={{ display: `${opened ? 'block' : 'none'}` }}>
            <div className="modal">
                <div className="modal-header">
                    {header}
                    <Button variant="ghost" click={handleClose}><IoClose></IoClose></Button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
}
