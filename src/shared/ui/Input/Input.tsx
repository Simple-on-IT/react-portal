import styles from './Input.module.scss';

export const Input = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input className={styles.input} {...props} />
);
