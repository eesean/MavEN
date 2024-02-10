import classNames from 'classnames';
import styles from './activity-card.module.scss';

export interface ActivityCardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ActivityCard = ({ className }: ActivityCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
                className={styles['activity-image']}
            />
            <h4 className={styles['activity-name']}>Heading 4</h4>
            <div className={styles.details}>
                <div className={styles['details-row']}>
                    <img src="../../../icons/day.png" alt="Day icon" className={styles['event-icon']} />
                    <p className={styles['event-text']}>Day</p>
                </div>
                <div className={styles['details-row']}>
                    <img src="../../../icons/time.png" alt="Day icon" className={styles['event-icon']} />
                    <p className={styles['event-text']}>Time</p>
                </div>
                <div className={styles['details-row']}>
                    <img src="../../../icons/location.png" alt="Day icon" className={styles['event-icon']} />
                    <p className={styles['event-text']}>Location</p>
                </div>
            </div>
        </div>
    );
};
