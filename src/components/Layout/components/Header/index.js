import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/asset/images';

const cx = className.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>

        <div className={cx('search')}>
          <input type="text" placeholder="Search and videos" spellCheck={false} />

          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>

          <div className={cx('loading')}>
            <FontAwesomeIcon icon={faSpinner} />
          </div>

          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx('actions')}>actions</div>
      </div>
    </header>
  );
}

export default Header;
