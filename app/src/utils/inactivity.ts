// src/hooks/useIdleTimeout.ts
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';

const useIdleTimeout = (timeout: number) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => dispatch(logout()), timeout);
    };

    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keypress', resetTimer);
    
    resetTimer();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keypress', resetTimer);
    };
  }, [dispatch, timeout]);
};

export default useIdleTimeout;
