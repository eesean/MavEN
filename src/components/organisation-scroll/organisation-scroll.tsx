import classNames from 'classnames';
import styles from './organisation-scroll.module.scss';
import { OrganisationCard } from '../organisation-card/organisation-card';

export interface OrganisationScrollProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const OrganisationScroll = ({ className }: OrganisationScrollProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['scroll-title']}>
                <h2 className={styles['chapter-title']}>Organisation</h2>
                <a href="/" className={styles['more-link']}>
                    See more{' '}
                </a>
            </div>
            <div className={styles['card-scroll']}>
                <OrganisationCard />
                <OrganisationCard />
                <OrganisationCard />
            </div>
        </div>
    );
};
