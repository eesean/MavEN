import { createBoard } from '@wixc3/react-board';
import { OrganisationScroll } from '../../../components/organisation-scroll/organisation-scroll';

export default createBoard({
    name: 'OrganisationScroll',
    Board: () => <OrganisationScroll />,
    isSnippet: true,
});
