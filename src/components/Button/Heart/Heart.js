import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import Styles from './Heart.module.scss';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);

function Heart({ style, onClickChange, heart }) {
    return (
        <div className={cx('heart')} onClick={() => onClickChange()}>
            <FontAwesomeIcon icon={faHeart} style={style} className={cx('heart__icon')} />
            <strong>{heart}</strong>
        </div>
    );
}

Heart.propTypes = {
    heart: PropTypes.number,
};

export default Heart;
