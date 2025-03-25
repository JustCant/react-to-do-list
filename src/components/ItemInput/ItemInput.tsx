import { ChangeEvent, useState } from "react";
import './ItemInput.css';

interface ItemInputProps {
    onItemAdded: (item: string) => void;
}

function ItemInput({ onItemAdded }: ItemInputProps) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue((event.target as HTMLInputElement).value);
    };

    const handleClick = () => {
        onItemAdded(inputValue)
    };    

    return (
        <>
            <div className="item-input mb-3">                
                <input 
                    type="text" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="Add an item..."
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button 
                    type="button" 
                    className="btn btn-primary item-input-btn" 
                    onClick={handleClick}
                >
                    Add Item
                </button>
            </div>
        </>
    )
}

export default ItemInput;