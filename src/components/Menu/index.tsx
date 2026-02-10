import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react'

type Availablethemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<Availablethemes>(() => {
        const storageTheme = localStorage.getItem('theme') as Availablethemes || 'dark';
        return storageTheme;
    });

    const nextThemeIcon = {
        dark: <SunIcon></SunIcon>,
        light: <MoonIcon></MoonIcon>
    }

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,) {
        event.preventDefault();
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return <nav className={styles.menu}>
        <a className={styles.menuLink} href="#" aria-label='Ir para a Home' title='Ir para a Home'>
            <HouseIcon />
        </a>
        <a className={styles.menuLink} href="#" aria-label='Ver histórico' title='Ver histórico'>
            <HistoryIcon />
        </a>
        <a className={styles.menuLink} href="#" aria-label='Configurações' title='Configurações'>
            <SettingsIcon />
        </a>
        <a className={styles.menuLink} href="#" aria-label='Mudar o tema' title='Mudar o tema' onClick={handleThemeChange}>
            {nextThemeIcon[theme]}
        </a>
    </nav>
}