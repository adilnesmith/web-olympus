import { FC } from 'react';
import styles from './Copyright.module.scss';
const Footer: FC<{}> = () => {
  return (
    <div className={styles.wrapper}>
      &copy; 2023 Web Olympus. All Rights Reserved
    </div>
  )
}
export default Footer;