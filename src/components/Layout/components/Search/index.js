import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountsItem from '~/components/AccountItems';

const cx = className.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);

  return (
    <HeadlessTippy
      interactive
      visible={searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            <AccountsItem />
            <AccountsItem />
            <AccountsItem />
          </PopperWrapper>
        </div>
      )}
    >
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
    </HeadlessTippy>
  );
}

export default Search;
