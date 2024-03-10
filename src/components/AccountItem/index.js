import classNames from 'classnames/bind';
import Styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(Styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://i.pinimg.com/564x/c1/9a/1d/c19a1d3823b60a19194fe700f0524ae6.jpg"
                alt="profile"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn Hiếu</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>@hieu.nguyen</span>
            </div>
        </div>
    );
}

export default AccountItem;
