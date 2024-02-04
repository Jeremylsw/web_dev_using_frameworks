import Entity from './Entity.js';
import { DeleteSelectedTestId } from './testId.js';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEntity, resetSelectedEntity } from './entityReducer.js';

export default function EntitiesList() {
    const entityList = useSelector(function (store) {
        return store.entity.entityList;
    });

    const filterList = useSelector(function (store) {
        return store.entity.filterCategories;
    });

    const selectedList = useSelector(function (store) {
        return store.entity.selectedEntities;
    });

    const dispatch = useDispatch();

    // Function to delete selected entities
    const handleDeleteSelectedEntities = () => {
        dispatch(deleteEntity(selectedList));
        dispatch(resetSelectedEntity()); // Clear the selected entities after deletion
    };

    // Filter entities based on filters
    // If no filter selected, display all
    // Else display only filtered categories
    const filteredEntities =
        filterList.length === 0 ? entityList : entityList.filter((entity) => filterList.includes(entity.category));

    return (
        <div>
            {/* Button for deleting selected entities */}
            {/* Conditionally render the "Delete selected" button */}
            {filteredEntities.length > 0 && (
                <button data-testid={DeleteSelectedTestId} onClick={handleDeleteSelectedEntities}>
                    Delete selected
                </button>
            )}

            {/* List of entities */}
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {filteredEntities.map((entity) => (
                    <li key={entity.id} style={{ border: '1px solid black', minHeight: '20px', padding: '5px' }}>
                        <Entity entity={entity} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
