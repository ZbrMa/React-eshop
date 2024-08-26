import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Toaster() {
    return <ToastContainer />;
}

export function showToast(message:string, type = 'default',autoClose:number) {
    switch (type) {
        case 'success':
            toast.success(message,{position:'top-center',autoClose:autoClose});
            break;
        case 'error':
            toast.error(message,{position:'top-center',autoClose:autoClose});
            break;
        case 'info':
            toast.info(message,{position:'top-center',autoClose:autoClose});
            break;
        case 'warning':
            toast.warn(message,{position:'top-center',autoClose:autoClose});
            break;
        default:
            toast(message,{position:'top-center',autoClose:autoClose});
            break;
    }
};