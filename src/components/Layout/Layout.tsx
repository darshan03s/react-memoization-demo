import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div className="min-h-screen w-[100vw]">
            <header className="h-[3rem]">
                <h1 className="text-2xl h-[3rem] font-bold text-center py-2 px-3 bg-background text-foreground dark:bg-background dark:text-foreground border-b dark:border-border border-border flex justify-between items-center">
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
                </h1>
            </header>

            <main className="w-[100vw] min-h-[calc(100vh-3rem)] h-[calc(100vh-3rem)] overflow-y-auto hide-scrollbar container text-center py-2 bg-background text-foreground dark:bg-background dark:text-foreground dark:border-border">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout