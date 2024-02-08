import { createBoard } from '@wixc3/react-board';
import { OrganisationCard } from '../../../components/organisation-card/organisation-card';

export default createBoard({
    name: 'OrganisationCard',
    Board: () => <OrganisationCard />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 982,
        canvasWidth: 531,
    },
});
