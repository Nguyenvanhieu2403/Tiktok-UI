import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import Styles from './Comments.module.scss';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);

function Comments({commnets}) {
    return (
        <div className={cx('comments')}>
            <FontAwesomeIcon icon={faCommentDots} className={cx('comments__icon')} />
            <strong>{commnets}</strong>
        </div>
    );
}

Comments.propTypes = {
    commnets: PropTypes.number,
};

export default Comments;
