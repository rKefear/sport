import { ButtonHTMLAttributes, FC, HtmlHTMLAttributes } from 'react'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import styles from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme,
    ...otherProps
  } = props
  return (
    <button
      type="button"
      className={classNames(styles.Button, { [styles[theme]]: true }, [className])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
