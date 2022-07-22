import { FC, PropsWithChildren } from 'react';
import styles from './button.module.css';

const Button: FC<PropsWithChildren> = (props) => {
  return (
    <button className={styles['button']}>Test</button>
  );
};

export default Button;
