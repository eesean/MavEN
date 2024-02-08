import { createBoard } from '@wixc3/react-board';
import { NavigationBar } from '../../../components/navigation-bar/navigation-bar';

export default createBoard({
    name: 'NavigationBar',
    Board: () => <NavigationBar />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 671,
        canvasHeight: 630,
        windowWidth: 814,
        windowHeight: 538,
    },
});
