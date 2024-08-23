import { useState } from "react";
import { Input } from "../common/input";
import { IContactForm } from "../../types/types";
import { InfoLine } from "../common/infoLine";
import './styles/contact.css';
import { Button } from "../common/button";

const initalFormValues:IContactForm = {
    name:'',
    surname:'',
    email:'',
    phone:'',
    text:'',
};

export function ContactBlock() {

    const [formError,setFormError] = useState(false);
    const [form,setForm] = useState<IContactForm>(initalFormValues);

    const handleFormInputChange = (param: keyof IContactForm,value:string) =>{
        setForm(prev=>({
            ...prev,
            [param]:value,
        }));
    };

    return(
        <div className="contact-container">
            <div className="contact-left">
                <h1>Kontakt na mě</h1>
                <InfoLine title="jméno">Jan Zbranek</InfoLine>
                <InfoLine title="e-mail">zbranek.j@gmail.com</InfoLine>
                <InfoLine title="telefon">731654987</InfoLine>
            </div>
            <div className="contact-right">
                <h1>Kontaktní formulář</h1>
                <form className="contact-form">
                    <Input 
                        returnValue={(e)=>handleFormInputChange('name',e.target.value)}
                        placeholder="Jméno" 
                        type="text" 
                        placeholderPosition="inside"
                    />
                    <Input 
                        returnValue={(e)=>handleFormInputChange('surname',e.target.value)}
                        placeholder="Příjmení" 
                        type="text" 
                        placeholderPosition="inside"
                    />
                    <Input 
                        returnValue={(e)=>handleFormInputChange('email',e.target.value)}
                        placeholder="E-mail" 
                        type="email" 
                        placeholderPosition="inside"
                    />
                    <Input 
                        returnValue={(e)=>handleFormInputChange('phone',e.target.value)}
                        placeholder="Telefon" 
                        type="phone" 
                        placeholderPosition="inside"
                    />
                    <div className="textarea-container">
                        <textarea onChange={(e)=>handleFormInputChange('text',e.target.value)} placeholder="Obsah zprávy"></textarea>
                    </div>
                    <Button variant="secondary">Odeslat</Button>
                </form>
            </div>
        </div>
    );
}