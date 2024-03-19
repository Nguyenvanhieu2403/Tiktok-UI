import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import Button from '../Button';
import Bookmark from '~/components/Button/Bookmark';
import Comments from '~/components/Button/Comments';
import Heart from '~/components/Button/Heart';
import Styles from './ViewVideo.module.scss';
import Share from '~/components/Button/Share';

const cx = classNames.bind(Styles);

function ViewVideo({ data, isLike }) {
    const [heartState, setHeartState] = useState(isLike);

    const handleHeart = () => {
        setHeartState(!heartState);
    };

    const [bookMarkState, setBookMarkState] = useState(false);

    const handleBookMark = () => {
        setBookMarkState(!bookMarkState);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <img src={data.user.avatar} alt={data.user.nickname} />
            </div>
            <div className={cx('content')}>
                <div className={cx('header')}>
                    <div className={cx('info')}>
                        <h3 className={cx('title')}>
                            {data.user.nickname}
                            <span className={cx('title-sub')}>{data.user.first_name + ' ' + data.user.last_name}</span>
                        </h3>
                        <p className={cx('description')}>{data.description}</p>
                        <p className={cx('music')}>
                            <FontAwesomeIcon icon={faMusic} />
                            <a href="/" className={cx('link-music')}>
                                {data.music}
                            </a>
                        </p>
                    </div>
                    <div className={cx('follow')}>
                        <Button outline>Follow</Button>
                    </div>
                </div>
                <div className={cx('controls')}>
                    <div className={cx('video')}>
                        <video controls autoPlay muted preload="auto" src={data.file_url} type="video/mp4" loop>
                            {/* <source  /> */}
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className={cx('actions')}>
                        <Heart
                            style={{ color: heartState ? 'red' : 'black' }}
                            onClickChange={handleHeart}
                            heart={data.likes_count}
                        />
                        <Comments comments={data.comments_count} />
                        <Bookmark
                            style={{ color: bookMarkState ? '#face15' : 'black' }}
                            onClickChange={handleBookMark}
                            bookMark={data.likes_count}
                        />
                        <Share share={data.shares_count} />
                    </div>
                </div>
            </div>
        </div>
    );
}

ViewVideo.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ViewVideo;
