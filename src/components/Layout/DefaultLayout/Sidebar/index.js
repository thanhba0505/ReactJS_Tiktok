import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

function Silebar() {
  return <aside className={cx('wrapper')}>
    <h2 className={cx('')}>Sidebar</h2>
  </aside>;
}

export default Silebar;
