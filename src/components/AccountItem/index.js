import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles)
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/6247d3e54aa2690fc0ee2e33eed888f9~c5_100x100.jpeg?x-expires=1701874800&x-signature=nyvMGOhPL8v%2B9oLdeNndEGLFhEU%3D" alt="" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Hoang Thi Khuyen</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}/>
                </h4>
                <span className={cx('useName')}>khuyenht</span>

            </div>

        </div>
    )
}

export default AccountItem;