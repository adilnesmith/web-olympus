import { FC } from 'react';
import { FooterProps } from 'lib/@types/common'
import styles from './Footer.module.scss';
import { COLUMN_1, COLUMN_2, COLUMN_3, COLUMN_4 } from 'lib/constants/Footer';
import Copyright from './copyright';
import InstagramIcon from 'components/icons/Instagram';
import XIcon from 'components/icons/x';
import LinkedInIcon from 'components/icons/Linkedin';
import BehanceIcon from 'components/icons/Behance';
import DribbbleIcon from 'components/icons/Dribbble';
import Logo from 'components/icons/Logo';
const Footer: FC<FooterProps> = () => {
  return (
    <>
      <footer className={styles.wrapper}>
        <div data-testid="column-1" className={styles.wrapper__columns__first}>
          <div className={styles.logoContainer}>
            <Logo />
          </div>
          <div className={styles.socialIcons}>
            <a href={COLUMN_1?.social_links[0]?.link}><XIcon /></a>
            <a href={COLUMN_1?.social_links[1]?.link}><InstagramIcon /></a>
            <a href={COLUMN_1?.social_links[2]?.link}><LinkedInIcon /></a>
            <a href={COLUMN_1?.social_links[3]?.link}><BehanceIcon /></a>
            <a href={COLUMN_1?.social_links[4]?.link}><DribbbleIcon /></a>
          </div>
        </div>
        <div data-testid="column-2" className={styles.wrapper__columns__second}>

          <label>{COLUMN_2.head}</label>
          <ul>
            {COLUMN_2?.pages?.map((page, index) => (
              <li key={index}><a href={page.link}>{page.title}</a></li>
            ))}
          </ul>
        </div>
        <div data-testid="column-3" className={styles.wrapper__columns__third}>

          <label>{COLUMN_3.head}</label>
          <ul>
            {COLUMN_3?.pages?.map((page, index) => (
              <li key={index}><a href={page.link}>{page.title}</a></li>
            ))}
          </ul>
        </div>
        <div data-testid="column-4" className={styles.wrapper__columns__fourth}>
          <label>{COLUMN_4.head}</label>
          <ul>
            {COLUMN_4?.pages?.map((page, index) => (
              <li key={index}><a href={page.link}>{page.title}</a></li>
            ))}
          </ul>
        </div>
      </footer>
      <Copyright />
    </>
  )
}
export default Footer;