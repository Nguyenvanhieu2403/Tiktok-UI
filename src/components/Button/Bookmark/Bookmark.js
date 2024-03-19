import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import Styles from './Bookmark.module.scss';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);

function Bookmark({ style, onClickChange, bookMart }) {
    return (
        <div className={cx('bookmark')} onClick={() => onClickChange()}>
            <FontAwesomeIcon icon={faBookmark} style={style} className={cx('bookmark__icon')} />
            <strong>{bookMart}</strong>
        </div>
    );
}

Bookmark.propTypes = {
    bookMart: PropTypes.number,
};

export default Bookmark;
