// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(Styles);

function AccountItem() {
    const renderPriview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPriview}>
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
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
