import { useTheme, Theme } from "app/providers/ThemeProvider"
import { classNames } from "shared/lib/helpers/classNames/classNames"
import styles from './ThemeSwitcher.module.scss'
import DarkIcon from 'shared/assets/icons/dark-icon.svg'
import LightIcon from 'shared/assets/icons/light-icon.svg'
import { Button, ThemeButton } from "shared/ui/Button/Button"

interface ThemeSwithcerProps {
    className?: string,
}

export const ThemeSwithcer = ({ className }: ThemeSwithcerProps) => {
    const { theme, toggleTheme } = useTheme()
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(styles.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK 
            ? <DarkIcon width={40} height={40} /> 
            : <LightIcon width={40} height={40} />
            }
        </Button>
    )
}