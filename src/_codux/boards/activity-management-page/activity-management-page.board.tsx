import { createBoard } from '@wixc3/react-board';
import { ActivityManagementPage } from '../../../components/activity-management-page/activity-management-page';

export default createBoard({
    name: 'ActivityManagementPage',
    Board: () => <ActivityManagementPage />,
    isSnippet: true,
});
