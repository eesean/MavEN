import classNames from 'classnames';
import styles from './activity-form.module.scss';

export interface ActivityFormProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ActivityForm = ({ className }: ActivityFormProps) => {
    return (
        <div className={styles.root}>
            <h2 className={styles['form-title']}>New Event</h2>
            <div className={styles['form-fields']}>
                <form className={styles.form}>
                    <div className={styles['form-row']}>
                        <label htmlFor="activity-name" className={styles['form-label']}>
                            Event:
                        </label>
                        <input
                            id="activity-name"
                            placeholder="Enter activity name"
                            className={styles['form-input']}
                        />
                    </div>
                    <div className={styles['form-row']}>
                        <label htmlFor="organiser" className={styles['form-label']}>
                            Organiser:
                        </label>
                        <input
                            id="orgnaniser"
                            type="text"
                            placeholder="Enter organiser name"
                            className={styles['form-input']}
                        />
                    </div>
                    <div className={styles['form-row']}>
                        <label htmlFor="date-start" className={styles['form-label']}>
                            Date Start:
                        </label>
                        <input id="date-start" type="date" className={styles['form-input']} />
                    </div>
                    <div className={styles['form-row']}>
                        <label htmlFor="date-end" className={styles['form-label']}>
                            Date End:
                        </label>
                        <input id="date-end" type="date" className={styles['form-input']} />
                    </div>
                    <div className={styles['form-row']}>
                        <label htmlFor="activity-time-start" className={styles['form-label']}>
                            Time Start:
                        </label>
                        <input
                            id="activity-time-start"
                            type="time"
                            className={styles['form-input']}
                        />
                    </div>
                    <div className={styles['form-row']}>
                        <label htmlFor="activity-time-end" className={styles['form-label']}>
                            Time End:
                        </label>
                        <input
                            id="activity-time-end"
                            type="time"
                            className={styles['form-input']}
                        />
                    </div>
                    <div className={styles['form-row']}>
                        <label htmlFor="activity-hours" className={styles['form-label']}>
                            Hours Spent:
                        </label>
                        <input
                            id="activity-hours"
                            min="0"
                            type="number"
                            placeholder="Enter number of hours"
                            className={styles['form-input']}
                        />
                    </div>
                </form>
            </div>
            <div className={styles['form-footer']}>
                <button className={styles['submit-button']}>Submit</button>
            </div>
        </div>
    );
};
