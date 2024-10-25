import classNames from 'classnames';
import styles from './Title.module.scss';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

export const Title = ({
  text,
  className,
  ...props
}: TitleProps) => {
  return (
    <h1 className={classNames(styles.title, className)} {...props}>{text}</h1>
  )
}