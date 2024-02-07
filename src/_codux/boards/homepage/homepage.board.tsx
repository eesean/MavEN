import { createBoard } from '@wixc3/react-board';
import { Homepage } from '../../../components/homepage/homepage';

export default createBoard({
    name: 'HeroBanner',
    Board: () => <Homepage />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1030,
        canvasHeight: 301,
    },
});
