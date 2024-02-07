import { createBoard } from '@wixc3/react-board';
import { EventsScroll } from '../../../components/events-scroll/events-scroll';

export default createBoard({
    name: 'EventsScroll',
    Board: () => <EventsScroll />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 822,
        canvasHeight: 385,
        windowWidth: 1142,
    },
});
