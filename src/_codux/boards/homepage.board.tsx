import '../../index.css';
import { createBoard } from '@wixc3/react-board';
import { Header } from '../../components/header/header';
import Homepage_module from '../../components/homepage/homepage.module.scss';
import { Footer } from '../../components/footer/footer';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar';
import { Homepage } from '../../components/homepage/homepage';
import { EventsScroll } from '../../components/events-scroll/events-scroll';
import { OrganisationScroll } from '../../components/organisation-scroll/organisation-scroll';

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
        canvasHeight: 2792,
        windowHeight: 2775,
        canvasWidth: 3294,
        windowWidth: 3246,
    },
});
