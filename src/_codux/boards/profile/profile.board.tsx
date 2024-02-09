import { createBoard } from '@wixc3/react-board';
import { Profile } from '../../../components/profile/profile';

export default createBoard({
    name: 'Profile',
    Board: () => <Profile />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1498,
        canvasWidth: 1340,
        canvasHeight: 591,
    },
});
