import className from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = className.bind(styles);

function MenuItem({ data, onClick }) {
  return (
    <Button
      className={cx('menu-item', {
        separate: data.separate,
      })}
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

export default MenuItem;
