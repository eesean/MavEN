import '../../index.css';
import { createBoard } from '@wixc3/react-board';
import { Header } from '../../components/header/header';
import Homepage_module from '../../components/homepage/homepage.module.scss';
import { Footer } from '../../components/footer/footer';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar';
import { Profile } from '../profile/profile';

export interface ProfilePageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ProfilePage = ({ className }: ProfilePageProps) => {
    return (
        <div className={Homepage_module.app}>
            <div className="header">
                <Header />
            </div>
            <div className="body">
                <NavigationBar />
                <div className="content">
                    <Profile />
                </div>
            </div>
            <div className={Homepage_module.footer}>
                <Footer />
            </div>
        </div>
    );
};
