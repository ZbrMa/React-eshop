import './styles/bodyBlock.css';
import React, { CSSProperties } from 'react';

type BlockColors = 'primary' | 'secondary';

type BlockColor = {
    backgroundColor:string;
};

type Props = {
    variant?:BlockColors,
    children: React.ReactNode;
    title?:string;
    id?:string;
    style?:CSSProperties,
}

const BlockStyles: Record<BlockColors,BlockColor> = {
    primary: {backgroundColor: 'var(--background)'},
    secondary: {backgroundColor: 'var(--backgroundSecondary)'}
}

export function BodyBlock({children, variant='primary',title='',id,style}:Props) {

    var hasTitle = false
    if (title===''){
        hasTitle = false
    }
    else{ hasTitle = true}
    const blockVariant = BlockStyles[variant];
    let styles = { ...blockVariant };

    return(
        <div className="body-block" style={styles} id={id}>
            <div className="body-block-inner" style={style}>
                {hasTitle &&(<div className='body-block-title'>{title}</div>)}
                {children}
            </div>
        </div>
    );
}