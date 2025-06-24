import { ThemeToggleButton } from "@/features/theme";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [listItems, setListItems] = useState<string[]>([]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [listItems]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setListItems((prev) => [...prev, "Item " + (prev.length + 1)]);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="fixed bottom-4 left-4">
        <ThemeToggleButton />
      </div>
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen h-full bg-white dark:bg-black colors-smooth">
        <div ref={listRef} className="h-[500px] w-[500px] overflow-y-auto hide-scrollbar border p-2 border-black">
          {listItems.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

const ListItem = ({ item }: { item: string }) => {
  return <div>{item}</div>;
};

