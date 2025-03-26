import TrashIcon from '../../common/TrashIcon/TrashIcon';
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
                <i className="bi-alarm"></i>
                <button type="button" className="btn btn-outline-danger" onClick={() => item.onBtnClick(item.index)}>
                    <TrashIcon/>
                </button>
            </li>
        </>
    )
}

export default Item;