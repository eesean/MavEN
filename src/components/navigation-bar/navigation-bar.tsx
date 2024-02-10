import classNames from 'classnames';
import styles from './navigation-bar.module.scss';

export interface NavigationBarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NavigationBar = ({ className }: NavigationBarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['nav-button']}>
                <img src="../../../icons/house.png" alt="Home icon" className={styles['nav-icons']} />
                <p className={styles['nav-text']}>Home</p>
            </div>
            <div className={styles['nav-button']}>
                <img src="../../../icons/activities.png" alt="" className={styles['nav-icons']} />
                <p className={styles['nav-text']}>Activities Management</p>
            </div>
            <div className={styles['nav-button']}>
                <img src="../../../icons/event.png" alt="" className={styles['nav-icons']} />
                <p className={styles['nav-text']}>Events</p>
            </div>
            <div className={styles['nav-button']}>
                <img src="../../../icons/certificate.png" alt="" className={styles['nav-icons']} />
                <p className={styles['nav-text']}>Certificate</p>
            </div>
            <div className={styles['nav-button']}>
                <img src="../../../icons/setting.png" alt="" className={styles['nav-icons']} />
                <p className={styles['nav-text']}>Settings</p>
            </div>
        </div>
    );
};
