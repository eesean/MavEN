import { createBoard } from '@wixc3/react-board';
import { EventFormPage } from '../../../components/event-form-page/event-form-page';

export default createBoard({
    name: 'EventFormPage',
    Board: () => <EventFormPage />,
    isSnippet: true,
});
