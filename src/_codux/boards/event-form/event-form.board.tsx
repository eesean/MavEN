import { createBoard } from '@wixc3/react-board';
import { EventForm } from '../../../components/event-form/event-form';

export default createBoard({
    name: 'EventForm',
    Board: () => <EventForm />,
    isSnippet: true,
});
