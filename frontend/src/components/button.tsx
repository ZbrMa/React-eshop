import './styles/button.css';
import React, { useState } from 'react';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'normal' | 'secondary' | 'destructive' | 'confirm';

type SizeStyles = {
  fontSize: string;
};

type VariantStyles = {
  backgroundColor: string;
  color: string;
  border?:string;
  outline?:string;
  outlinePosition?:string;
};

const buttonSizes: Record<ButtonSize, SizeStyles> = {
    small: { fontSize: '0.8rem' },
    medium: { fontSize: '1.1rem' },
    large: { fontSize: '1.4rem' }
  };

type Props = {
    size?:ButtonSize;
    variant?:ButtonVariant;
    children:React.ReactNode;
    click?:()=>void,
    link?:string,
}

export function Button({size='medium',variant='normal',children,click,link}:Props) {
  const [isHover,setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
      setIsHover(false);
  };

  const buttonVariants: Record<ButtonVariant, VariantStyles> = {
    normal: !isHover? { backgroundColor: 'var(--primary)', color: 'black', border:'none' } : { backgroundColor: 'var(--primaryHover)', color: 'white', border:'none' },
    secondary: !isHover? {backgroundColor:'var(--primaryHover)', color:'white', border:'none'} : {backgroundColor:'var(--primary)', color:'black', outline:'2px solid var(--primaryHover)', outlinePosition:'-2px', border:'none'},
    destructive: !isHover? { backgroundColor: 'red', color: 'white',border:'none' } : { backgroundColor: 'var(--primary)', color: 'red',border:'2px solid red' },
    confirm: !isHover? { backgroundColor: 'green', color: 'white',border:'none' } : { backgroundColor: 'var(--primary)', color: 'green',border:'2px solid green' }
  };

    const sizeStyles = buttonSizes[size];
    const variantStyles = buttonVariants[variant];
    const styles = { ...sizeStyles, ...variantStyles };

    return(
        <button style={styles} className='button' onClick={click} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
        </button>
    );
}