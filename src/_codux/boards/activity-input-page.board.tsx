import '../../index.css';
import { createBoard } from '@wixc3/react-board';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar';
import { ActivityForm } from '../../components/activity-form/activity-form';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

export default createBoard({
    name: 'ActivityInputPage',
    Board: () => (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="body">
                <NavigationBar />
                <div className="content">
                    <ActivityForm />
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 163,
        canvasWidth: 1179,
        windowWidth: 896,
    },
});
