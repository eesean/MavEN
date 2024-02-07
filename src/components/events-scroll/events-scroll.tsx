import classNames from 'classnames';
import styles from './events-scroll.module.scss';
import { ActivityCard } from '../activity-card/activity-card';

export interface EventsScrollProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const EventsScroll = ({ className }: EventsScrollProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['scroll-title']}>
                <h2 className={styles['chapter-title']}>Upcoming Events </h2>
                <a href="/" className={styles['more-link']}>
                    See more{' '}
                </a>
            </div>
            <div className={styles['card-scroll']}>
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
            </div>
        </div>
    );
};
