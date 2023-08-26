import { classNames } from 'shared/lib/helpers/classNames/classNames'
import { Loader } from 'shared/ui/Loader/ui/Loader'
import styles from './PageLoader.module.scss'

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(styles.PageLoader, {}, [className])}>
    <Loader />
  </div>
)
