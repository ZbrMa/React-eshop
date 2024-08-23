import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ip = 'localhost';

export const api = axios.create({
    baseURL: `http://${ip}:5000`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const useApiPost = <T,>(apiPoint:string, payload: any, refetch:boolean = true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const payloadRef = useRef(payload);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await api.post(apiPoint, payloadRef.current);
            setData(response.data as T);
            setError(false);
        } catch (err) {
            setError(true);
            setData(null);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        if (refetch && JSON.stringify(payloadRef.current) !== JSON.stringify(payload)) {
            payloadRef.current = payload;
            fetchData();
        };
        payloadRef.current = payload;
    }, [payload, refetch, apiPoint]);

    useEffect(() => {
        fetchData();
    }, []); 

    return { data, loading, error };
};

export const useApiGetNoParams = <T,>(apiPoint:string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await api.get(apiPoint);
            setData(response.data as T);
            setError(false);
        } catch (err) {
            setError(true);
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, loading, error };
};