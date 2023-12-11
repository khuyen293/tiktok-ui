import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faRightToBracket,
    faEllipsisVertical,
    faEarthAsia,
    faCircle,
    faCircleQuestion,
    faKeyboard,
    faCloudUpload,
    faMessage,
    faCoins,
    faGears,
    faUsers,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import {InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUsers} />,
            title: 'View profile',
            to: '@smiling',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGears} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ]
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/"><img src={images.logo} alt="Tiktok" /></Link>
                {/* Search */}
                <Search  />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy 
                                interactive
                                delay={[0, 200]} 
                                content="Upload video" 
                                placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <UploadIcon  />
                                </button>
                            </Tippy>
                            {/* <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button> */}
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image src="https://lh3.googleusercontent.com/ogw/ANLem4aB3mClsRajl4qVP80QX4eibU-xkK6gTXHJi3fNHQ=s32-c-mo" 
                            className={cx('user-avatar')} alt="" 
                            fallback="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/0a65bbc7f0e4616c7207706ba862e395~c5_100x100.jpeg?x-expires=1702224000&x-signature=oLlv8cUtmTI7z2NhYxZvbfb1r0s%3D" 
                            />
                        ): (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
