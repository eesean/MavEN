import '../../index.css';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'EventFormPage',
    Board: () => <div className="app"></div>,
    isSnippet: true,
});
