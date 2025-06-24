import React, { useEffect, useRef, useState } from 'react'
import ListItems_Code from './ListItems_Code';

const ListItems = () => {
    const [pauseAddItems, setPauseAddItems] = useState(true);
    const [tab, setTab] = useState<"list" | "code">("list");

    return (
        <div className='flex flex-col items-center gap-2'>
            <h1 className='text-2xl font-bold'>List Items without memoization</h1>
            <div className="tabs flex gap-2">
                <button
                    className={`text-button-foreground p-2 rounded-full hover:bg-button-hover px-4 ${tab === "list" ? "bg-active-tab" : "bg-button-background"}`}
                    onClick={() => setTab("list")}>
                    List
                </button>
                <button
                    className={`text-button-foreground p-2 rounded-full hover:bg-button-hover px-4 ${tab === "code" ? "bg-active-tab" : "bg-button-background"}`}
                    onClick={() => setTab("code")}>
                    Code
                </button>
            </div>
            {tab === "list" && (
                <div className='list-items-without-memo flex flex-col items-center gap-2 w-full'>
                    <button
                        className='bg-button-background text-button-foreground p-2 rounded-full hover:bg-button-hover px-4'
                        onClick={() => setPauseAddItems(!pauseAddItems)}>
                        {pauseAddItems ? "Start" : "Stop"}
                    </button>
                    <List pauseAddItems={pauseAddItems} />
                </div>
            )}
            {tab === "code" && (
                <div className='list-items-without-memo-code'>
                    <pre className='h-[500px] w-full text-sm overflow-y-auto hide-scrollbar border p-4 border-border rounded-lg text-left text-wrap'>
                        {ListItems_Code}
                    </pre>
                </div>
            )}
        </div>
    )
}

export default ListItems

const INITIAL_ITEMS = Array.from({ length: 5 }, (_, index) => `Item ${index + 1}`);

const List = React.memo(({ pauseAddItems }: { pauseAddItems: boolean }) => {
    const [listItems, setListItems] = useState<string[]>(INITIAL_ITEMS);
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!pauseAddItems) {
                addItems();
            }
        }, 150);

        return () => clearInterval(intervalId);
    }, [pauseAddItems]);

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

    return (
        <div ref={listRef} className="h-[450px] w-full overflow-y-auto hide-scrollbar border p-4 border-border rounded-lg">
            {listItems.map((item, index) => (
                <ListItem key={index} item={item} />
            ))}
        </div>
    )
});

const ListItem = ({ item }: { item: string }) => {
    return <div className='p-2 border-b border-border'>{item}</div>;
};