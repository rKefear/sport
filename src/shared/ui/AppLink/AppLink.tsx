import { FC } from "react"
import { Link, LinkProps } from "react-router-dom"
import styles from './AppLink.module.scss'
import { classNames } from "shared/lib/helpers/classNames/classNames"

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { 
        to, 
        children, 
        className, 
        theme = AppLinkTheme.PRIMARY, 
        ...otherProps 
    } = props
    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {[styles[theme]]: true}, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}