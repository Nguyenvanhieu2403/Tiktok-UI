import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '~/layouts/component/Header';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function DefaulLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaulLayout;
