import Tippy from '@tippyjs/react/headless';
import className from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

const cx = className.bind(styles);

function menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((items, index) => (
      <MenuItem key={index} data={items}/>
    ));
  };

  return (
    <Tippy
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('content')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default menu;
