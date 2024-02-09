import classNames from 'classnames';
import styles from './new-component.module.scss';
import { Header } from '../../components/header/header';
import Homepage_module from '../../components/homepage/homepage.module.scss';
import { Footer } from '../../components/footer/footer';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar';
import { OrganisationProfile } from '../organisation-profile/organisation-profile';

export interface NewComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const NewComponent = ({ className }: NewComponentProps) => {
    return (
        <div className={Homepage_module.app}>
            <div className="header">
                <Header />
                <div className="body">
                    <NavigationBar />
                    <div className="content">
                        <OrganisationProfile />
                    </div>
                </div>
            </div>
            <div className={Homepage_module.footer}>
                <Footer />
            </div>
        </div>
    );
};
