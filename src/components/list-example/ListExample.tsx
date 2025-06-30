import ListItemsMemoized from './ListItemsMemoized'
import ListItems from './ListItems'

const ListExample = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="list-items-without-memo text-center">
                <ListItems />
            </div>
            <div className="list-items-with-memo text-center">
                <ListItemsMemoized />
            </div>
        </div>
    )
}

export default ListExample