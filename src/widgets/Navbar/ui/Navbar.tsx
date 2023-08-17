import { classNames } from "shared/lib/helpers/classNames/classNames"
import styles from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { ThemeSwithcer } from "widgets/ThemeSwitcher"

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={ classNames(styles.navbar, {}, [className]) }>
            <ThemeSwithcer />
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={styles.mainLink}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    )
}