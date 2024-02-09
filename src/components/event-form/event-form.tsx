import classNames from 'classnames';
import styles from './event-form.module.scss';

export interface EventFormProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const EventForm = ({ className }: EventFormProps) => {
    return (
        <div className={styles.root}>
            <h2 className={styles['form-title']}>
                Activity Form Request
                <div className={styles['form-fields']}>
                    <form className={styles.form}>
                        <div className={styles['form-row']}>
                            <label htmlFor="activity-name" className={styles['form-label']}>
                                Event name:
                            </label>
                            <input
                                id="activity-name"
                                placeholder="Enter activity name"
                                className={styles['form-input']}
                            />
                        </div>
                        <div className={styles['form-row']}>
                            <label htmlFor="organiser" className={styles['form-label']}>
                                Description:
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
                            <label htmlFor="activity-time-end" className={styles['form-label']}>
                                Manpower required:
                            </label>
                            <input
                                id="activity-time-end"
                                type="time"
                                className={styles['form-input']}
                            />
                        </div>
                    </form>
                </div>
            </h2>
            <div className={styles['form-footer']}>
                <button className={styles['submit-button']}>Submit</button>
            </div>
        </div>

    );
};
