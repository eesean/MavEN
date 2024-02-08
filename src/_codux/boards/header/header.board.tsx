import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/header/header';

export default createBoard({
    name: 'Header',
    Board: () => <Header />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1842,
        canvasHeight: 216,
        windowWidth: 1194,
    },
});
