import { EntitySelectTestId } from './testId.js';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilter, deleteEntity, selectEntity, togglePinEntity } from './entityReducer.js';
import { Link } from 'react-router-dom';

export default function Entity({ entity }) {
    const { id, category, title, description, price, country, travelPeriod, imageURL, pinned } = entity;

    const entityList = useSelector(function (store) {
        return store.entity.entityList;
    });

    const dispatch = useDispatch();

    let pinnedEntity = entityList.find((item) => item.id === id);
    let isPinned = pinnedEntity.pinned === 'No' ? '' : '📌';
    let pinButtonText = pinnedEntity.pinned === 'Yes' ? 'Unpin' : 'Pin';

    return (
        <div>
            {/* Checkbox for multiple select and delete */}
            <input
                type="checkbox"
                data-testid={EntitySelectTestId}
                style={{ marginBottom: '10px' }}
                onChange={() => dispatch(selectEntity(id))}
            />{' '}
            {isPinned}
            <br />
            {/* Displaying the category of the entity */}
            <div style={{ marginLeft: '30px' }}>
                <span>{'ID: ' + id}</span>
                <br />
                <span>{'Category: ' + category}</span>
                <br />
                <span>{'Title: ' + title}</span>
                <br />
                <span>{'Description: ' + description}</span>
                <br />
                <span>{'Price: ' + price}</span>
                <br />
                <span>{'Country: ' + country}</span>
                <br />
                <span>{'Travel Period: ' + travelPeriod}</span>
                <br />
                <span>{'Image URL: ' + imageURL}</span>
            </div>
            <br />
            {/* Button for jumping to entity info page */}
            <Link to={'/' + id}>
                <button onClick={() => dispatch(clearFilter())}>More Info</button>
            </Link>
            {/* Button for Pinning Entity */}
            <button onClick={() => dispatch(togglePinEntity(id))}>{pinButtonText}</button>
            {/* Button for deleting the single entity */}
            <button onClick={() => dispatch(deleteEntity(id))}>Delete</button>
        </div>
    );
}
