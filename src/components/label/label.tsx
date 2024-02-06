import classNames from 'classnames';
import styles from './label.module.scss';

export interface LabelProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Label = ({ className }: LabelProps) => {
    return <div className={classNames(styles.root, className)}>Label</div>;
};
