import { createBoard } from '@wixc3/react-board';
import { ActivityForm } from '../../../components/activity-form/activity-form';

export default createBoard({
    name: 'ActivityForm',
    Board: () => <ActivityForm />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1075,
        windowWidth: 1210,
    },
});
