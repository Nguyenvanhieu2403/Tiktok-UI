import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import Styles from './Share.module.scss';
import Tippy from '@tippyjs/react/headless';
import SharePreview from './SharePreview';

const cx = classNames.bind(Styles);

function Share({ share }) {
    const renderPreview = () => {
        return (
            <div tabIndex="-1">
                <SharePreview />
            </div>
        );
    };

    return (
        <div className={cx('bookmark')}>
            <div>
                <Tippy interactive delay={[200, 1000]} offset={[-20, 0]} placement="top-start" render={renderPreview}>
                    <div>
                        <FontAwesomeIcon icon={faShare} className={cx('bookmark__icon')} />
                    </div>
                </Tippy>
            </div>
            <strong>{share}</strong>
        </div>
    );
}

Share.propTypes = {
    share: PropTypes.number,
};

export default Share;
