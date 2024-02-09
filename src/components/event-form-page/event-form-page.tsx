import classNames from 'classnames';
import styles from './event-form-page.module.scss';
import { Header } from '../../components/header/header';
import Homepage_module from '../../components/homepage/homepage.module.scss';
import { Footer } from '../../components/footer/footer';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar';
import { EventForm } from '../event-form/event-form';

export interface EventFormPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const EventFormPage = ({ className }: EventFormPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={Homepage_module.app}>
                <div className="header">
                    <Header />
                </div>
                <div className="body">
                    <NavigationBar />
                    <div className="content">
                        <EventForm />
                    </div>
                </div>
                <div className={Homepage_module.footer}>
                    <Footer />
                </div>
            </div>
        </div>
    );
};
