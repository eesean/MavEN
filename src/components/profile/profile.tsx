import classNames from 'classnames';
import styles from './profile.module.scss';

export interface ProfileProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Profile = ({ className }: ProfileProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>
                <h1 className={styles.title}>Profile</h1>
                <img src="../icons/editing.png" alt="" className={styles['edit-img']} />
            </div>
            <div className={styles['main-data']}>
                <img src="../icons/profile.png" alt="" className={styles['profile-img']} />
                <h2 className={styles.name}>Name </h2>
                <h2 className={styles['user-type']}>User Type</h2>
            </div>
            <div className={styles.details}>
                <h2 className={styles['segment-title']}>General</h2>
                <div className={styles['data-fields']}>
                    <p className={styles['data-name']}>Date of Birth:</p>
                    <p className={styles['data-value']}>This is a paragraph.</p>
                </div>
                <div className={styles['data-fields']}>
                    <p className={styles['data-name']}>Gender:</p>
                    <p className={styles['data-value']}>This is a paragraph.</p>
                </div>
                <div className={styles['data-fields']}>
                    <p className={styles['data-name']}>Shirt size:</p>
                    <p className={styles['data-value']}>This is a paragraph.</p>
                </div>
                <h2 className={styles['segment-title']}>Contact</h2>
                <div className={styles['data-fields']}>
                    <p className={styles['data-name']}>Address:</p>
                    <p className={styles['data-value']}>This is a paragraph.</p>
                </div>
                <div className={styles['data-fields']}>
                    <p className={styles['data-name']}>Phone:</p>
                    <p className={styles['data-value']}>This is a paragraph.</p>
                </div>
                <div className={styles['data-fields']}>
                    <p className={styles['data-name']}>E-mail:</p>
                    <p className={styles['data-value']}>This is a paragraph.</p>
                </div>
                <h2 className={styles['segment-title']}>Emergency Details</h2>
                <div className={styles['data-fields']}>
                    <p className={styles['data-name']}>Next-of-kin:</p>
                    <p className={styles['data-value']}>This is a paragraph.</p>
                </div>
                <div className={styles['data-fields']}>
                    <p className={styles['data-name']}>Relationship:</p>
                    <p className={styles['data-value']}>This is a paragraph.</p>
                </div>
                <div className={styles['data-fields']}>
                    <p className={styles['data-name']}>Contact</p>
                    <p className={styles['data-value']}>This is a paragraph.</p>
                </div>
                <h2 className={styles['segment-title']}>Accreditation</h2>
                <div className={styles['data-fields']}>
                    <p className={styles['data-name']}>Volunteering experiences:</p>
                    <p className={styles['data-value']}>This is a paragraph.</p>
                </div>
            </div>
        </div>
    );
};
