import { LoginModal } from '../../modals/loginModal';
import './styles/footer.css';
import { useState } from 'react';
import { useAppSelector,useAppDispatch } from '../../hooks/storeHooks';
import { logout } from '../../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { IoDiamondOutline, IoLogoFacebook,IoLogoInstagram,IoLogoYoutube } from 'react-icons/io5';

export function Footer() {
    const [loginOpened,setLoginOpened] = useState(false);
    const {token} = useAppSelector((state)=>state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
      };

    return(
        <footer>
            <div className='footer-inner'>
                <div className='footer-container left'>
                    <div className='footer-container-inner'>
                        <div className='menu-logo' onClick={()=>navigate('/')}>
                            <IoDiamondOutline></IoDiamondOutline>
                            KŮŽE ZBRANEK
                        </div>
                    </div>
                </div>
                <div className='footer-container center'>
                    <div className='footer-container-inner'>
                        <h2>Kontakt</h2>
                        <a>Telefon: 798456321</a>
                        <a>E-mail: jmeno.prijmeni@gmail.com</a>
                        <a>Jméno: Jméno Příjmení</a>
                        <ul className='soc-media'>
                            <IoLogoFacebook/>
                            <IoLogoInstagram/>
                            <IoLogoYoutube/>
                        </ul>
                    </div>
                </div>
                <div className='footer-container right'>
                    <div className='footer-container-inner'>
                        <h2>Navigace</h2>
                        <a className='footer-btn' onClick={()=>navigate('/')}>Domů</a>
                        <a className='footer-btn' onClick={()=>navigate('/produkty')}>Produkty</a>
                        <a className='footer-btn' onClick={()=>navigate('/vyroba')}>Výroba</a>
                        <a className='footer-btn' onClick={()=>navigate('/kontakt')}>Kontakt</a>
                        {!token ? (
                            <a className='footer-btn' onClick={()=>setLoginOpened(true)}>Přihlásit se</a>
                        ):(
                            <>
                            <a className='footer-btn' onClick={handleLogout}>Odhlásit se</a>
                            <a className='footer-btn' onClick={()=>navigate('/sprava')}>Správa produtků</a>
                            </>
                        )}
                    </div>
                </div>
                <div className='footer-container bottom'>
                    <div className='footer-container-inner'>
                        ©Copyright 2024 ...
                    </div>
                </div>
            </div>
            <LoginModal trigger={loginOpened} close={setLoginOpened}></LoginModal>
        </footer>
    );
};