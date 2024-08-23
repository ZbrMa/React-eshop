import { useState, useEffect,useRef } from "react";
import { IoClose, IoChevronUp, IoChevronDown} from "react-icons/io5";
import './styles/dropdown.css';
import { DropdownOption } from "../../types/types";

type Props = {
    options:DropdownOption[];
    placeholder:string,
    returnSelected:(value:number[])=>void,
    multiSelect?:boolean,
    initialValue?:number[];
};

const iconStyle = {
    height:"auto",
    width:"auto",
    fontWeight:700,
    fontSize:"16px",
    marginRight:"2px",
};

export function Dropdown({options,placeholder,returnSelected,multiSelect=true,initialValue}:Props){
    const dropdownRef = useRef<HTMLDivElement>(null);
    const[isOpened,setIsOpened] = useState(false);
    const [selected, setSelected] = useState<DropdownOption[]>(
        initialValue ? options.filter(option => initialValue.includes(option.value)) : [] );

    const handleOpen =()=>{
        if(!isOpened) setIsOpened(true);
        else setIsOpened(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpened(false);
        };
    };

    useEffect(()=>{
            setSelected(initialValue ? options.filter(option => initialValue.includes(option.value)) : []);
    },[initialValue]);

    useEffect(() => {
        const selectedValues = selected.map(item => item.value);
        returnSelected(selectedValues);
    }, [selected]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (option:DropdownOption) => {
        
        if (selected.find(item => item.value === option.value)) {
            setSelected(selected.filter(item => item.value !== option.value));
        } else {
            if (multiSelect) {
                setSelected([...selected, option]);
            } else {
                setSelected([option]);
            }
        }
    };

    const handleRemove = (option:DropdownOption) => {
        setSelected(selected.filter(item => item.value !== option.value));
    };

    return (
        <div ref={dropdownRef} className={`dropdown ${isOpened ? "is-opened" : ""}`}>
            <div className="dropdown-inner">
                <div className="dropdown-head">
                    <div className="dropdown-control">
                        <div className="selected-options">
                            {selected.map((item) =>
                                <div key={item.value} className="selected-item" onClick={() => handleRemove(item)}>
                                    <div className="selected-text">{item.label}</div>
                                    <IoClose style={iconStyle} />
                                </div>
                            )}
                        </div>
                        <div className="select-placeholder" onClick={handleOpen}>{placeholder}</div>
                    </div>
                    {isOpened
                        ? <IoChevronUp className="dropdown-chevron" onClick={handleOpen} />
                        : <IoChevronDown className="dropdown-chevron" onClick={handleOpen} />}
                </div>
            </div>
            {isOpened && options && (
                <div className="option-container">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className={`option ${selected.some(item => item.value === option.value) ? "selected" : ""}`}
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}