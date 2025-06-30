import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div className="min-h-screen h-screen overflow-auto flex flex-col w-full scrollbar-styles">
            <Header />
            <Main />
        </div>
    )
}

export default Layout

const Header = () => (
    <header className="h-[3rem] sticky top-0 left-0 z-10">
        <div className="text-2xl h-[3rem] font-bold py-2 px-3 bg-background text-foreground dark:bg-background dark:text-foreground border-b dark:border-border border-border flex justify-between items-center">
            <Link to="/">
                React Memoization Demo
            </Link>
            <ul className="flex gap-2 font-light text-base">
                <li>
                    <Link to="/custom-comparator">
                        Custom Comparator
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        List Example
                    </Link>
                </li>
            </ul>
        </div>
    </header>
);

const Main = () => (
    <main className="flex-1 w-full container py-2 bg-background text-foreground dark:bg-background dark:text-foreground">
        <Outlet />
    </main>
);