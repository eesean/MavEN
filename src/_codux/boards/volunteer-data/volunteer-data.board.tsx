import { createBoard } from '@wixc3/react-board';
import { VolunteerData } from '../../../components/volunteer-data/volunteer-data';

export default createBoard({
    name: 'VolunteerData',
    Board: () => <VolunteerData />,
    isSnippet: true,
});
