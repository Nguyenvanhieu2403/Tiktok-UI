import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(Styles);

function SuggestedAccounts({ label, data, onViewChange }) {

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((item) => (
                <AccountItem key={item.id} data={item} />
            ))}

            <p className={cx('more-btn')} onClick={() => onViewChange()}>
                See all
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
};

export default SuggestedAccounts;
