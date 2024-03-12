import classNames from 'classnames/bind';
import { useEffect, useState, useCallback } from 'react';

import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    LiveIcon,
    UserGroupIcon,
    HomeActiveIcon,
    LiveActiveIcon,
    UserGroupActiveIcon,
    FriendsIcon,
    FriendsActiveIcon,
    ExploreIcon,
    ExploreActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '../SuggestedAccounts';
import * as userService from '~/services/accountService';
import FooterSidebar from './FooterSidebar';
import SidebarEffect from './SidebarEffect';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedAccounts, setSuggestedAccounts] = useState([]);

    useEffect(() => {
        userService
            .getSuggested(page, PER_PAGE)
            .then((data) => {
                setSuggestedAccounts((prevUsers) => [...prevUsers, ...data]);
            })
            .catch((error) => {
                console.error('getSuggested', error);
            });
    }, [page]);

    const handleViewChange = () => {
        setPage(page + 1);
    };

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Friends"
                    to={config.routes.friends}
                    icon={<FriendsIcon />}
                    activeIcon={<FriendsActiveIcon />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts label="Following accounts" data={suggestedAccounts} onViewChange={handleViewChange} />
            <FooterSidebar />
        </aside>
    );
}

export default Sidebar;
