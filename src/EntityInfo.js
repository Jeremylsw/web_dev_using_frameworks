import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateCategory, updateCategoryText } from './entityReducer.js';

export default function EntityInfo() {
    const entityList = useSelector(function (store) {
        return store.entity.entityList;
    });

    const updateText = useSelector(function (store) {
        return store.entity.updateCategory;
    });

    const params = useParams(); // Entity ID
    const dispatch = useDispatch();

    let thisEntity = entityList.find((obj) => obj.id === params.id);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if the category is not empty before submitting
        if (updateText.trim() === '') {
            // Handle the case where the category is empty
            alert('Input cannot be empty!');
            return;
        }
        dispatch(updateCategory({ id: params.id, new: updateText }));
        dispatch(updateCategoryText(''));
    };

    return (
        <div>
            <div style={{ paddingBottom: '10px' }}>
                <Link to={'/'}>
                    <button>Return</button>
                </Link>
            </div>
            <div style={{ paddingBottom: '10px' }}>
                <b>Entity ID:</b> {thisEntity.id} <br />
                <b>Category:</b> {thisEntity.category} <br />
                <b>Pinned:</b> {thisEntity.pinned}
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        value={updateText}
                        onChange={(e) => {
                            dispatch(updateCategoryText(e.target.value));
                        }}
                    />
                </label>

                {/* Submit button */}
                <input type="submit" value="Update Category" />
            </form>
        </div>
    );
}
