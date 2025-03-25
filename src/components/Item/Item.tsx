import './Item.css';

interface ItemProps {
    item: {
        name: string;
        index: number;
        onBtnClick: (index: number) => void;
    }
}

const Item = ({ item }: ItemProps) => {
    return (
        <>
            <li className="list-group-item list-item">
                <span>{item.index + 1}. { item.name }</span>
                <button type="button" className="btn btn-danger" onClick={() => item.onBtnClick(item.index)}>Delete</button>
            </li>
        </>
    )
}

export default Item;