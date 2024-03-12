import classNames from "classnames/bind";
import Styles from "./FooterSidebar.module.scss";
import SidebarEffect from "../SidebarEffect";

const cx = classNames.bind(Styles);

function FooterSidebar() {
    return ( 
        <div className={cx('footer-page')}>
            <SidebarEffect />
            <div className={cx('details-page')}>
                <span>About</span>
                <span>Newsroom</span>
                <span>Contact</span>
                <span>Careers</span>
            </div>
            <div className={cx('details-page')}>
                <span>TikTok for Good</span>
                <span>Advertise</span>
                <span>Developers</span>
                <span>Transparency</span>
                <span>TikTok Rewards</span>
                <span>TikTok Embeds</span>
            </div>
            <div className={cx('details-page')}>
                <span>Help</span>
                <span>Safety</span>
                <span>Terms</span>
                <span>Privacy</span>
                <span>Creator Potal</span>
                <span>Community Guidelines</span>
            </div>
            <div className={cx('details-page')}>
                <span>See more</span>
            </div>
            <div className={cx('details-page')}>
                <span>© 2023 TikTok</span>
            </div>
        </div>
     );
}

export default FooterSidebar;