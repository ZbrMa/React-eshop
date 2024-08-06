import { Modal } from "./modal";

type Props = {
    product: string;
    desc: string;
    isOpened: boolean;
    close: () => void;
}

export function ProductModal({ product, desc, isOpened, close }: Props) {
    return (
        <Modal header={product} isOpened={isOpened} close={close}>
            <div className="product-modal">
                {desc}
            </div>
        </Modal>
    );
}
