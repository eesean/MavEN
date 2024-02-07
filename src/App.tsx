import App_module from './App.module.scss';
import { Header } from './components/header/header';
import { NavigationBar } from './components/navigation-bar/navigation-bar';
import { EventsScroll } from './components/events-scroll/events-scroll';
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tNSvp0OuWTO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function Component() {
    return (
        <div>
            <EventsScroll />
            <Header />
            <div className={App_module.body}>
                <div className={App_module['nav-bar']}>
                    <NavigationBar />
                </div>
                <div className={App_module.content}></div>
            </div>
        </div>
    );
}

function CalendarDaysIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
        </svg>
    );
}
