import { FC } from 'react'
import { HeaderProps } from 'lib/@types/common'
import { NAVIGATION, LOGO_ALT_TEXT, CTA } from 'lib/constants/Header';
import styles from './Header.module.scss'
import Logo from 'components/icons/Logo';

const Header: FC<HeaderProps> = ({ }) => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.wrapper__columns__logo}>
        <Logo />
        <img src="" alt={LOGO_ALT_TEXT} />
      </div>
      <nav data-testid="navigation" className={styles.wrapper__columns__navigation}>
        <ul>
          {NAVIGATION?.map((page, index) => (
            <li key={index}><a href={page.link}>{page.title}</a></li>
          ))}
        </ul>
      </nav>
      <button>{CTA.title}</button>
    </header >
  )
}
export default Header;