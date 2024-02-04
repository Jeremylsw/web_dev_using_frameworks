import { addEntity, inputCategory } from './entityReducer.js';
import { useDispatch, useSelector } from 'react-redux';
import { AddEntityCategoryTestId, AddEntitySubmitTestId } from './testId.js';

export default function AddEntityForm() {
    const category = useSelector(function (store) {
        return store.entity.inputCategory;
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if the category is not empty before submitting
        if (category.trim() === '') {
            // Handle the case where the category is empty
            alert('Category cannot be empty!');
            return;
        }
        dispatch(addEntity(category));
        dispatch(inputCategory(''));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Category {/* Input for typing the category */}
                <input
                    type="text"
                    data-testid={AddEntityCategoryTestId}
                    value={category}
                    onChange={(e) => {
                        dispatch(inputCategory(e.target.value));
                        // console.log(category);
                    }}
                />
            </label>

            {/* Submit button */}
            <input type="submit" data-testid={AddEntitySubmitTestId} value="Submit" />
        </form>
    );
}
