import '../../index.css';
import { createBoard } from '@wixc3/react-board';
import { Header } from '../../components/header/header';
import Homepage_module from '../../components/homepage/homepage.module.scss';
import { Footer } from '../../components/footer/footer';

export default createBoard({
    name: 'Homepage',
    Board: () => (
        <div className={Homepage_module.app}>
            <div className="header">
                <Header />
            </div>
            <div className={Homepage_module.footer}>
                <Footer />
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 2438,
        windowHeight: 2775,
        canvasWidth: 3236,
        windowWidth: 3262,
    },
});
