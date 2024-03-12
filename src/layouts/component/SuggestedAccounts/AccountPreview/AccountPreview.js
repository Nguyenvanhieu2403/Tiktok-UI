import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(Styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/474014bom/anh-gai-xinh-cute-de-thuong-hot-girl-2.jpg"
                    alt="avatar"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>hieu.nguyen</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('verified')} />
                </p>
                <p className={cx('name')}>Nguyễn Văn Hiếu</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}> Followers</span>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}> Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
