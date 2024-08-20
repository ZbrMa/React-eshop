import './styles/button.css';
import React, { act, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'normal' | 'secondary' | 'destructive' | 'confirm' | 'ghost' | 'ghost-secondary';

type Props = {
    size?:ButtonSize;
    variant?:ButtonVariant;
    children:React.ReactNode;
    click?:()=>void,
    link?:string,
    disabled?:boolean;
}

export function Button({size='medium',variant='normal',children,click,link,disabled=false}:Props) {

  const naviagate = useNavigate();

  if (link){
    const handleClick = () =>{
      if(click) click();
      naviagate(link);
    };

    return(
      <button className={`button ${variant} ${size}`} onClick={handleClick} disabled={disabled}>
          {children}
      </button>
    );
  }
  else {
    return(
      <button className={`button ${variant} ${size}`} onClick={click} disabled={disabled}>
          {children}
      </button>
    );
  };
};

type VariantButtonProps = {
  click: (value:any)=>void,
  children:React.ReactNode,
  size?:ButtonSize;
  variant?:ButtonVariant;
  returnValue:number | string;
  isActive:boolean;
};

export function VariantButton({click, children,size='medium',variant='ghost-secondary',returnValue,isActive}:VariantButtonProps) {

  const handleClick = () =>{
    click(returnValue);
  };

  return(
    <button className={`variant-button ${variant} ${size} ${isActive? 'active' : ''}`} onClick={handleClick}>
      {children}
    </button>
  );
}