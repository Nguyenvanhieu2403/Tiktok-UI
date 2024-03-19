import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCode, faLink, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import Styles from './SharePreview.module.scss';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(Styles);

function SharePreview() {
    return (
        <div className={cx('wrapper')}>
            <PopperWrapper>
                <div className={cx('content')}>
                    <div className={cx('embed-item')}>
                        <a className={cx("items")} href='/' >
                            <FontAwesomeIcon icon={faCode} className={cx('embed-icon')} />
                            <span>Embed</span>
                        </a>
                    </div>
                    <div className={cx('send-item')}>
                        <a className={cx("items")} href='/' >
                            <FontAwesomeIcon icon={faPaperPlane} className={cx('send-icon')} />
                            <span>Send to friends</span>
                        </a>
                    </div>
                    <div className={cx('facebook-item')}>
                        <a className={cx("items")} href='/' >
                            <FontAwesomeIcon icon={faFacebook} className={cx('facebook-icon')} />
                            <span>Share to Facebook</span>
                        </a>
                    </div>
                    <div className={cx('whatsapp-item')}>
                        <a className={cx("items")} href='/' >
                            <FontAwesomeIcon icon={faWhatsapp} className={cx('whatsapp-icon')} />
                            <span>Share to WhatsApp</span>
                        </a>
                    </div>
                    <div className={cx('link-item')}>
                        <a className={cx("items")} href='/' >
                            <FontAwesomeIcon icon={faLink} className={cx('link-icon')} />
                            <span>Copy link</span>
                        </a>
                    </div>
                    <div className={cx('more-item')}>
                        <FontAwesomeIcon icon={faChevronDown} className={cx('down-icon')} />
                    </div>
                </div>
            </PopperWrapper>
        </div>
    );
}

export default SharePreview;
