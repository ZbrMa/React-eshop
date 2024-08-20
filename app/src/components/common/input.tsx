import './styles/input.css';

type Props = {
    placeholder:string;
    returnValue:(value: React.ChangeEvent<HTMLInputElement>) =>void;
    placeholderPosition?:'inside' | 'outside';
    type:string;
    error?:boolean;
};

export function Input({placeholder,returnValue, type, placeholderPosition = 'inside',error=false}:Props) {

    if(placeholderPosition === 'inside'){
        return(
            <input className={`input ${error? 'error': ''}`} placeholder={placeholder} type={type} onChange={returnValue}></input>
        );
    }
    else {
        return(
            <div className="input-container">
                <label className="input-placeholder">{placeholder}:</label>
                <input className={`input ${error? 'error': ''}`} type={type} onChange={returnValue}></input>
            </div>
        );
    };
    
};