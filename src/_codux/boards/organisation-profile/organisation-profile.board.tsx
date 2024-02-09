import { createBoard } from '@wixc3/react-board';
import { OrganisationProfile } from '../../../components/organisation-profile/organisation-profile';

export default createBoard({
    name: 'OrganisationProfile',
    Board: () => <OrganisationProfile />,
    isSnippet: true,
});
