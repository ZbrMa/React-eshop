import React, { useState, useEffect } from "react";
import './styles/modal.css';

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
                    <div className="modal-nav" onClick={handleClose}>X</div>
                </div>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
}
