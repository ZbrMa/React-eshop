import './styles/button.css';
import React, { act, ButtonHTMLAttributes, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'normal' | 'secondary' | 'destructive' | 'confirm' | 'ghost' | 'ghost-secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?:ButtonSize;
    variant?:ButtonVariant;
    children:React.ReactNode;
    click?:()=>void,
    link?:string,
}

export function Button({size='medium',variant='normal',children,click,link,...buttonProps}:ButtonProps) {

  const naviagate = useNavigate();

  if (link){
    const handleClick = () =>{
      if(click) click();
      naviagate(link);
    };

    return(
      <button className={`button ${variant} ${size}`} onClick={handleClick} {...buttonProps}>
          {children}
      </button>
    );
  }
  else {
    return(
      <button className={`button ${variant} ${size}`} onClick={click} {...buttonProps}>
          {children}
      </button>
    );
  };
};

interface VariantButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  click: (value:any)=>void,
  children:React.ReactNode,
  size?:ButtonSize;
  variant?:ButtonVariant;
  returnValue:number | string;
  isActive:boolean;
};

export function VariantButton({click, children,size='medium',variant='ghost-secondary',returnValue,isActive,...buttonProps}:VariantButtonProps) {

  const handleClick = () =>{
    click(returnValue);
  };

  return(
    <button className={`variant-button ${variant} ${size} ${isActive? 'active' : ''}`} onClick={handleClick} {...buttonProps}>
      {children}
    </button>
  );
}