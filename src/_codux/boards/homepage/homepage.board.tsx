import { createBoard } from '@wixc3/react-board';
import { Homepage } from '../../../components/homepage/homepage';

export default createBoard({
    name: 'HeroBanner',
    Board: () => <Homepage />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 2431,
        canvasHeight: 697,
        windowWidth: 1886,
        windowHeight: 895,
    },
});
