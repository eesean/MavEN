import classNames from 'classnames';
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img src="../../../icons/favicon.png" alt="Logo image" className={styles['logo-image']} />
                <h1 className={styles['logo-text']}>MAvEN</h1>
            </div>
            <img src="../../../icons/profile.png" alt="profile image" className={styles.avatar} />
        </div>
    );
};
