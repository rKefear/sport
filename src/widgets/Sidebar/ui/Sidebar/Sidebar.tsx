import { classNames } from 'shared/lib/helpers/classNames/classNames'
import { useState } from 'react'
import { ThemeSwithcer } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import styles from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = (): void => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <button
        type="button"
        onClick={onToggle}
      >
        TOGGLE
      </button>
      <div className={styles.switchers}>
        <ThemeSwithcer />
        <LangSwitcher className={styles.lang} />
      </div>
    </div>
  )
}
