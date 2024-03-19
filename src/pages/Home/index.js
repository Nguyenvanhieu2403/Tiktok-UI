import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Styles from './Home.module.scss';

import ScrollToTopButton from '~/components/ScrollToTopButton';
import ViewVideo from '~/components/ViewVideo';
import * as videoForYouService from '~/services/videoForYouService';

const cx = classNames.bind(Styles);

function Home() {
    const [videoForYou, setVideoForYou] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        videoForYouService
            .get('for-you', 1)
            .then((data) => {
                setIsLoading(true);
                setVideoForYou(data);
            })
            .catch((error) => {
                console.error('get video for you', error);
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);

    return (
        <div className={cx('body')}>
            {videoForYou.map((data) => {
                return <ViewVideo key={data.uuid} data={data} isLike = {data.is_liked}/>;
            })}
            <ScrollToTopButton />
        </div>
    );
}

export default Home;
