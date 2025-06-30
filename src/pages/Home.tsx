import { ThemeToggleButton } from "@/features/theme";
import ListExample from "@/components/list-example/ListExample";

const Home = () => {
  return (
    <>
      <div className="fixed bottom-2 left-2">
        <ThemeToggleButton />
      </div>
      <ListExample />
      <ListExample />
    </>
  );
};

export default Home;

