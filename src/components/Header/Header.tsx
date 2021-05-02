import { FC } from 'react';
import ContentWrapper from '../ContentWrapper/ContentWrapper';

import logoImage from '../../assets/logo_img.svg';
import logoText from '../../assets/logo_txt.svg';
import cartIcon from '../../assets/cart_icon.svg';
import styles from './Header.module.scss';

const Header: FC = () => (
  <header className={styles.header}>
    <ContentWrapper>
      <div className={styles.header__content}>
        <button type="button" className={styles.header__logo}>
          <img src={logoImage} alt="Test Task Logo" />
          <img
            src={logoText}
            className={styles['header__logo-text']}
            alt="Test Task Logo"
          />
        </button>
        <button type="button" className={styles.header__cart}>
          <span className={styles['header__cart-text']}>cart</span>
          <img src={cartIcon} alt="Shopping cart" />
          <div className={styles['header__cart-indicator']}>3</div>
        </button>
      </div>
    </ContentWrapper>
  </header>
);

export default Header;
