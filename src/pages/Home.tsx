import { ThemeToggleButton } from "@/features/theme";
import ListExample from "@/components/list-example/ListExample";

const Home = () => {
  return (
    <>
      <div className="fixed bottom-2 left-2">
        <ThemeToggleButton />
      </div>
      <div className="max-w-7xl mx-auto">
        <ListExample />
      </div>
    </>
  );
};

export default Home;

