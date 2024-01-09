import Tippy from '@tippyjs/react/headless';
import className from 'classnames/bind';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

const cx = className.bind(styles);

const defaultFc = () => {};

function Menu({ children, items = [], hideOnClick = false, OnChange = defaultFc }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((items, index) => {
      const isParent = !!items.children;

      return (
        <MenuItem
          key={index}
          data={items}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, items.children]);
            } else {
              // console.log(items, history.length);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      visible
      interactive
      offset={[16, 8]}
      delay={[0, 300]}
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
