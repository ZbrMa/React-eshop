import { Button } from '../common/button';
import { LoginModal } from '../../modals/loginModal';
import './styles/footer.css';
import { useState } from 'react';
import { useAppSelector,useAppDispatch } from '../../hooks/storeHooks';
import { logout } from '../../slices/authSlice';
import { useNavigate } from 'react-router-dom';

export function Footer() {
    const [loginOpened,setLoginOpened] = useState(false);
    const {username,token} = useAppSelector((state)=>state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
      };

    return(
        <footer>
            <div className='footer-inner'>
                {!token ? (
                    <Button variant='ghost' click={()=>setLoginOpened(true)}>Přihlásit se</Button>
                ):(
                    <Button variant='ghost' click={handleLogout}>Odhlásit se</Button>
                )}
            </div>
            <LoginModal trigger={loginOpened} close={setLoginOpened}></LoginModal>
        </footer>
    );
}