import classNames from 'classnames';
import styles from './organisation-card.module.scss';

export interface OrganisationCardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const OrganisationCard = ({ className }: OrganisationCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
                className={styles['organisation-image']}
            />
            <h4 className={styles['organisation-name']}>Organisation</h4>
        </div>
    );
};
