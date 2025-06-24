import React, { useEffect, useRef, useState } from 'react'

const ListItemsMemoized = () => {
    const [pauseAddItems, setPauseAddItems] = useState(true);
    return (
        <div className='flex flex-col items-center gap-2'>
            <h1 className='text-2xl font-bold'>List Items with memoization</h1>
            <div className="start-stop-section">
                <button
                    className='bg-button-background text-button-foreground p-2 rounded-full hover:bg-button-hover px-4'
                    onClick={() => setPauseAddItems(!pauseAddItems)}>
                    {pauseAddItems ? "Start" : "Stop"}
                </button>
            </div>
            <List pauseAddItems={pauseAddItems} />
        </div>
    )
}

export default ListItemsMemoized

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
        <div ref={listRef} className="h-[500px] w-[500px] overflow-y-auto hide-scrollbar border p-4 border-border rounded-lg">
            {listItems.map((item, index) => (
                <ListItem key={index} item={item} />
            ))}
        </div>
    )
});

const ListItem = React.memo(({ item }: { item: string }) => {
    return <div className='p-2 border-b border-border'>{item}</div>;
});