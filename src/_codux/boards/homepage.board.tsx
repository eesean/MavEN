import '../../index.css';
import { createBoard } from '@wixc3/react-board';
import { EventsScroll } from '../../components/events-scroll/events-scroll';
import { Header } from '../../components/header/header';
import { Homepage } from '../../components/homepage/homepage';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar';

export default createBoard({
    name: 'Homepage',
    Board: () => (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="body">
                <NavigationBar />
                <div>
                    <Homepage />
                    <EventsScroll />
                </div>
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 1282,
        windowHeight: 928,
        canvasWidth: 1256,
        windowWidth: 2178,
    },
});
