import classNames from 'classnames';
import styles from './organisation-profile.module.scss';
import { EventsScroll } from '../events-scroll/events-scroll';

export interface OrganisationProfileProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const OrganisationProfile = ({ className }: OrganisationProfileProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>
                <h1 className={styles.title}>Organisation Profile</h1>
            </div>
            <div className={styles['org-details']}>
                <img src="../icons/profile.png" alt="" className={styles['profile-img']} />
                <div>
                    <div className={styles['detail-row']}>
                        <h2 className={styles['detail-name']}>Name </h2>
                        <p className={styles['detail-value']}>Lorem Ipsum</p>
                    </div>
                    <div className={styles['detail-row']}>
                        <h2 className={styles['detail-name']}>Description</h2>
                        <p className={styles['detail-value']}>Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            <EventsScroll />
        </div>
    );
};
