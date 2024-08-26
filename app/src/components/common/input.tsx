import './styles/input.css';
import { InputHTMLAttributes } from 'react';
import { useState } from 'react';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>,'placeholder'> {
    returnValue:(value: React.ChangeEvent<HTMLInputElement>) =>void;
    placeholderPosition?:'inside' | 'outside';
    error?:boolean;
    placeholder:string,
};

export function Input({returnValue, placeholderPosition = 'inside',error=false,placeholder,...inputProps}:InputProps) {

    if(placeholderPosition === 'inside'){
        return(
            <input className={`input ${error? 'error': ''}`} {...inputProps} placeholder={placeholder} onChange={returnValue}></input>
        );
    }
    else {
        return(
            <div className="input-container">
                <label className="input-placeholder">{placeholder}:</label>
                <input className={`input ${error? 'error': ''}`} {...inputProps} onChange={returnValue}></input>
            </div>
        );
    };
    
};