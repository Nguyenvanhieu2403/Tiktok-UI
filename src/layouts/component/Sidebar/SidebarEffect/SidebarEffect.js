import classNames from 'classnames/bind';
import Styles from './SidebarEffect.module.scss';

const cx = classNames.bind(Styles);

function SidebarEffect() {
    return (
        <a
            href="https://effecthouse.tiktok.com/download?utm_campaign=ttweb_entrance_v5&utm_source=tiktok_webapp_main"
            target="_blank"
            rel="noreferrer"
            className={cx('wrapper')}
        >
            <div className={cx('sidebar-effect')}>
                <img
                    className={cx('sidebar-effect__image')}
                    src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/8152caf0c8e8bc67ae0d.png"
                    alt="Create TikTok effects, get a reward"
                />
                <div className={cx('sidebar-effect__content')}>
                    <h4 className={cx('text')}>Create TikTok effects, get a reward</h4>
                </div>
            </div>
        </a>
    );
}

export default SidebarEffect;
