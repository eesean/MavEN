import '../../index.css';
import { createBoard } from '@wixc3/react-board';
import { EventsScroll } from '../../components/events-scroll/events-scroll';
import { Header } from '../../components/header/header';
import { Homepage } from '../../components/homepage/homepage';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar';
import Homepage_module from '../../components/homepage/homepage.module.scss';
import { OrganisationScroll } from '../../components/organisation-scroll/organisation-scroll';
import { Footer } from '../../components/footer/footer';

export default createBoard({
    name: 'Homepage',
    Board: () => (
        <div className={Homepage_module.app}>
            <div className="header">
                <Header />
            </div>
            <div className="body">
                <NavigationBar />
                <div className="content">
                    <Homepage />
                    <EventsScroll />
                    <OrganisationScroll />
                </div>
            </div>
            <div className={Homepage_module.footer}>
                <Footer />
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 2566,
        windowHeight: 2705,
        canvasWidth: 2446,
        windowWidth: 2134,
    },
});
