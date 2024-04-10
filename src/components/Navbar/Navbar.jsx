import { useEffect, useState } from "react";

import { NavMenu } from "./NavMenu";

import { HamburguerMenu } from "./HamburguerMenu";
import { CloseMenu } from "./CloseMenu";

import Logo from '../../assets/Logo-ConecctionLink.png';
import LogoWhite from '../../assets/Logo-ConecctionLink-White.png';

const body = document.body;

export const Navbar = () => {

    // for hamburguer menu
    const [nav, setNav] = useState(false);
    const [header, setHeader] = useState(false);

    const toogleNav = () => {
        setNav(!nav);
        body.classList.toggle('overlay');
    }

    const changeBackground = () => {
        // aplicamos estilos cuando se haya realizado scroll, verificar class condicional
        setHeader(window.scrollY > 0);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);

        return () => {
            window.removeEventListener('scroll', changeBackground);
        }
    }, [])


    return (
        <header className={`w-full sticky top-0 z-[100] ${header ? "bg-dark-green" : "bg-slate-100"} transition-all duration-300 ease`}>
            <nav className="container-nav relative min-h-full h-32 flex items-center justify-between">
                <a href="#">
                    {
                        header ?
                        <img className="block w-64" src={LogoWhite} />
                        :
                        <img className="block w-64" src={Logo} />
                    }
                </a>
                <NavMenu
                    header={ header }
                    nav={ nav }
                />
                <div onClick={ toogleNav } className="block lg:hidden cursor-pointer">
                    {
                        nav ? 
                        <CloseMenu 
                            header={ header }
                        />
                        : 
                        <HamburguerMenu
                            header={ header }
                        />
                    }
                </div>
            </nav>
        </header>
    )
}
