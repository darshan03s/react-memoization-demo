import { ThemeToggleButton } from "@/features/theme";
import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  const [listItems, setListItems] = useState<string[]>([]);
  const listRef = useRef<HTMLDivElement>(null);
  const [pauseAddItems, setPauseAddItems] = useState(true);

  function addItems() {
    setListItems((prev) => [...prev, "Item " + (prev.length + 1)]);
  }

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: "instant",
      });
    }
  }, [listItems]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!pauseAddItems) {
        addItems();
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, [pauseAddItems]);

  return (
    <>
      <div className="fixed bottom-4 left-4">
        <ThemeToggleButton />
      </div>
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen h-full bg-white dark:bg-black colors-smooth">
        <div className="start-stop-section">
          <button onClick={() => setPauseAddItems(!pauseAddItems)}>
            {pauseAddItems ? "Start" : "Stop"}
          </button>
        </div>
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

const ListItem = React.memo(({ item }: { item: string }) => {
  return <div>{item}</div>;
});

