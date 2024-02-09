import classNames from 'classnames';
import styles from './volunteer-data.module.scss';

export interface VolunteerDataProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const VolunteerData = ({ className }: VolunteerDataProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles.title}>Volunteer Activity</h1>
            <div>
                <table className={styles.table}>
                    <thead className={styles['table-header']}>
                        <tr className={styles['table-headers']}>
                            <th className={styles['table-header-column']}>Event Name</th>
                            <th className={styles['table-header-column']}>Date Start</th>
                            <th className={styles['table-header-column']}>Date End</th>
                            <th className={styles['table-header-column']}>Total Hours</th>
                            <th className={styles['table-header-column']}>Certificate</th>
                        </tr>
                    </thead>
                    <tbody className={styles['table-body']}>
                        <tr>
                            <th className={styles['table-cell']}>Help29</th>
                            <th className={styles['table-cell']}>29-Jan 2024</th>
                            <th className={styles['table-cell']}>31-Feb 2024</th>
                            <th className={styles['table-cell']}>16 hours</th>
                            <th className={styles['table-cell']}>
                                <img
                                    src="../icons/medal.png"
                                    alt=""
                                    className={styles['cert-img']}
                                />
                            </th>
                        </tr>
                        <tr>
                            <th className={styles['table-cell']}>Do Good for Youths</th>
                            <th className={styles['table-cell']}>2-Dec 2023</th>
                            <th className={styles['table-cell']}>3-Dec 2023</th>
                            <th className={styles['table-cell']}>16 hours</th>
                            <th className={styles['table-cell']}>
                                <img
                                    src="../icons/medal.png"
                                    alt=""
                                    className={styles['cert-img']}
                                />
                            </th>
                        </tr>
                    </tbody>
                    <tr></tr>
                </table>
            </div>
        </div>
    );
};
