import './styles/menu.css';
import { useState,useEffect } from 'react';
import { IoDiamondOutline, IoLogoInstagram, IoLogoYoutube, IoLogoFacebook,IoMenu, IoClose } from "react-icons/io5";
import { Button } from '../components/button';
import { useNavigate } from 'react-router-dom';

export function Menu() {

    const [opened,setOpened] = useState(false);
    const navigation = useNavigate();

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1200);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (!isMobile) {
          setOpened(false);
        }
      }, [isMobile]);

    const scrollTo = (id:string) =>{
      const element = document.getElementById(id);
      element?.scrollIntoView();
    }

    return (
        <nav className='nav'>
          <div className={`nav-inner ${opened ? 'active' : ''}`}>
          {isMobile && (
            <div className='menu-ham'>
            {!opened &&(<Button click={() => setOpened(!opened)}><IoMenu></IoMenu></Button>)}
            {opened &&(<Button click={() => setOpened(!opened)}><IoClose></IoClose></Button>)}
              {/*<div className='menu-icon' onClick={() => setOpened(!opened)}>M</div>*/}
            </div>
          )}
            <menu className='nav-items'>
              <li className='nav-item' onClick={()=>scrollTo("products")}>Produkty</li>
              <li className='nav-item' onClick={()=>scrollTo("process")}>Výroba</li>
              <li className='nav-item'>Kontakt</li>
            </menu>
            <div className='menu-logo' onClick={()=>navigation('/')}>
              <IoDiamondOutline></IoDiamondOutline>
              KŮŽE ZBRANEK
            </div>
            <div className='menu-icons'>
              <Button><IoLogoInstagram></IoLogoInstagram></Button>
              <Button><IoLogoFacebook></IoLogoFacebook></Button>
              <Button><IoLogoYoutube></IoLogoYoutube></Button>
            </div>
          </div>
          
        </nav>
    );
}