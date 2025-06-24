import { ThemeToggleButton } from "@/features/theme";
import ListItems from "@/components/ListItems";
import ListItemsMemoized from "@/components/ListItemsMemoized";
const Home = () => {
  return (
    <>
      <div className="fixed bottom-2 left-2">
        <ThemeToggleButton />
      </div>
      <div className="container min-h-screen h-full text-center py-2 bg-background text-foreground dark:bg-background dark:text-foreground dark:border-border">
        <header>
          <h1 className="text-2xl font-bold text-center py-2 bg-background text-foreground dark:bg-background dark:text-foreground dark:border-border">React Memoization Demo</h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
          <div className="list-items-without-memo">
            <ListItems />
          </div>
          <div className="list-items-with-memo">
            <ListItemsMemoized />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

