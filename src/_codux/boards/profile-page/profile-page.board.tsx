import { createBoard } from '@wixc3/react-board';
import { ProfilePage } from '../../../components/profile-page/profile-page';

export default createBoard({
    name: 'ProfilePage',
    Board: () => <ProfilePage />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1159,
        windowWidth: 842,
    },
});
