import classNames from 'classnames';
import styles from './activity-management-page.module.scss';
import { Header } from '../../components/header/header';
import Homepage_module from '../../components/homepage/homepage.module.scss';
import { Footer } from '../../components/footer/footer';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar';
import { VolunteerData } from '../volunteer-data/volunteer-data';

export interface ActivityManagementPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const ActivityManagementPage = ({ className }: ActivityManagementPageProps) => {
    return (
        
        <div className={Homepage_module.app}>
            <div className="header">
                <Header />
            </div>
            <div className="body">
                <NavigationBar />
                <div className="content">
                    <VolunteerData />
                </div>
            </div>
            <div className={Homepage_module.footer}>
                <Footer />
            </div>
        </div>
    );
};
