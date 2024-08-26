import { useEffect, useState } from "react";
import { Input } from "../common/input";
import { IContactForm } from "../../types/types";
import { InfoLine } from "../common/infoLine";
import './styles/contact.css';
import { Button } from "../common/button";
import { useSendMessage } from "../../hooks/fetchHooks";
import { showToast, Toaster } from "../common/toaster";

const initalFormValues: IContactForm = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    text: '',
};

export function ContactBlock() {
    const [form, setForm] = useState<IContactForm>(initalFormValues);
    const { data, loading, error, postData } = useSendMessage();

    const handleFormInputChange = (param: keyof IContactForm, value: string) => {
        setForm(prev => ({
            ...prev,
            [param]: value,
        }));
    };

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await postData(form);
    };

    useEffect(() => {
        if (data) {
            setForm(initalFormValues);
            showToast(data,'success',2000);
        };
    }, [data]);

    return (
        <div className="contact-container">
            <div className="contact-left">
                <h1>Kontakt na mě</h1>
                <InfoLine title="jméno">Jméno Přijmení</InfoLine>
                <InfoLine title="e-mail">jmeno.prijmeni@gmail.com</InfoLine>
                <InfoLine title="telefon">731654987</InfoLine>
            </div>
            <div className="contact-right">
                <h1>Kontaktní formulář</h1>
                <form className="contact-form" onSubmit={handleFormSubmit} id="contact-form">
                    <Input 
                        returnValue={(e) => handleFormInputChange('name', e.target.value)}
                        placeholder="Jméno" 
                        type="text"
                        required 
                        value={form.name}
                    />
                    <Input 
                        returnValue={(e) => handleFormInputChange('surname', e.target.value)}
                        placeholder="Příjmení" 
                        type="text" 
                        required
                        value={form.surname}
                    />
                    <Input 
                        returnValue={(e) => handleFormInputChange('email', e.target.value)}
                        placeholder="E-mail" 
                        type="email" 
                        required
                        value={form.email}
                    />
                    <Input 
                        returnValue={(e) => handleFormInputChange('phone', e.target.value)}
                        placeholder="Telefon" 
                        type="phone" 
                        value={form.phone}
                    />
                    <div className="textarea-container">
                        <textarea 
                            onChange={(e) => handleFormInputChange('text', e.target.value)} 
                            placeholder="Obsah zprávy" 
                            value={form.text}
                        />
                    </div>
                    <Button variant="secondary" type="submit">Odeslat</Button>
                </form>
            </div>
            <Toaster></Toaster>
        </div>
    );
}
