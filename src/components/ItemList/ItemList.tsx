import Item from "../Item/Item";

interface ItemListProps {
    items: {
        name: string;
        index: number;
        onBtnClick: (index: number) => void;
    }[];
}

const ItemList = ({ items }: ItemListProps) => {
    const listItems = items.map((item) => <Item item={item} key={item.index}/>);  

    return (
        <>
            <ul className="list-group">
                { listItems }
            </ul>
        </>
    );
};

export default ItemList;