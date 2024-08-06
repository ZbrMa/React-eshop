import './styles/bodyBlock.css';
import React from 'react';

type BlockColors = 'primary' | 'secondary';

type BlockColor = {
    backgroundColor:string;
};

type Props = {
    variant?:BlockColors,
    children: React.ReactElement;
    title?:string;
    id?:string;
}

const BlockStyles: Record<BlockColors,BlockColor> = {
    primary: {backgroundColor: 'var(--primary)'},
    secondary: {backgroundColor: 'var(--secondary)'}
}

export function BodyBlock({children, variant='primary',title='',id}:Props) {

    var hasTitle = false
    if (title===''){
        hasTitle = false
    }
    else{ hasTitle = true}
    const blockVariant = BlockStyles[variant];
    const styles = { ...blockVariant };

    return(
        <div className="body-block" style={styles} id={id}>
            <div className="body-block-inner">
                {hasTitle &&(<div className='body-block-title'>{title}</div>)}
                {children}
            </div>
        </div>
    );
}