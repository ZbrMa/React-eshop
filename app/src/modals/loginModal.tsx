import { Modal } from "./modal";
import { Button } from "../components/common/button";
import { useState, useRef, useEffect } from "react";
import { Input } from "../components/common/input";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { login } from "../slices/authSlice";

type Props = {
    trigger:boolean;
    close:(state:boolean)=>void;
}

export function LoginModal({trigger,close}:Props){
    const [opened,setOpened] = useState(false);
    const [formError,setFormError] = useState(false);
    const [formName,setName] = useState('');
    const [formPass,setPass] = useState('');
    const dispatch = useAppDispatch();
    const {loading,error,username,token} = useAppSelector((state)=>state.auth); 

    useEffect(()=>{
        setOpened(trigger);
    },[trigger]);

    const handleClose = () => {
        setOpened(false);
        close(false);
    };

    const handleSubmit = () => {
        dispatch(login({username:formName,password:formPass}));
       
    };

    useEffect(()=>{
        if(error) {
            setFormError(true);
            setTimeout(()=>setFormError(false),1000);
        };
    },[error]);

    useEffect(()=>{
        if (username && token) {
            handleClose();
        };
    },[username,token])

    const handleNameChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        setName(value.target.value);
    };

    const handlePassChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        setPass(value.target.value);
    };

    return(
        <Modal header="Přihlášení" isOpened={opened} close={handleClose}>
            <>
            <Input 
                placeholder="Jméno"
                type="text"
                placeholderPosition="outside"
                returnValue={handleNameChange}
                error={formError}
            />
            <Input 
                placeholder="Heslo"
                type="password"
                placeholderPosition="outside"
                returnValue={handlePassChange}
                error={formError}
            />
            <Button variant="secondary" click={handleSubmit} disabled={formError? true:false}>{loading? 'Probíhá přihlašování' : 'Přihlásit se'}</Button>
            </>
        </Modal>
    );
};