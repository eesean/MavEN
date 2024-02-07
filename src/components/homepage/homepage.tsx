import classNames from 'classnames';
import styles from './homepage.module.scss';

export interface HomepageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Homepage = ({ className }: HomepageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['hero-banner']}>
                <img
                    src="../images/Volunteering.jpg"
                    alt="Hero image"
                    className={styles['hero-image']}
                />
                <div className={styles['hero-text']}>
                    <h1 className={styles['hero-title']}>MAvEN</h1>
                    <h2 className={styles['hero-tagline']}>
                        Connecting Hearts, Building Communities.
                    </h2>
                    <p className={styles['hero-description']}>
                        Your time is a powerful force for change. Explore opportunities to transform
                        lives and be part of a community that believes in the strength of collective
                        impact.
                    </p>
                </div>
            </div>
        </div>
    );
};
