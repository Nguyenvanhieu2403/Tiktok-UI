import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(Styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/474014bom/anh-gai-xinh-cute-de-thuong-hot-girl-2.jpg"
                alt="avatar"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>hieu.nguyen</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('verified')} />
                </p>
                <p className={cx('name')}>Nguyễn Văn Hiếu</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
