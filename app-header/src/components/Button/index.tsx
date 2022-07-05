import { FC } from 'react';
import styles from './button.module.css';

const Button: FC = () => {
  return (
    <button className={styles['button']}>Test</button>
  );
};

export default Button;
