import { createBoard } from '@wixc3/react-board';
import { ActivityCard } from '../../../components/activity-card/activity-card';

export default createBoard({
    name: 'ActivityCard',
    Board: () => <ActivityCard />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 537,
        canvasHeight: 332,
    },
});
