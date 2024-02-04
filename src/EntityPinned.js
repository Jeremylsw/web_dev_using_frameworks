import { useSelector } from 'react-redux';
import Entity from './Entity.js';
import { Link } from 'react-router-dom';

export default function EntityPinned() {
    const entityList = useSelector(function (store) {
        return store.entity.entityList;
    });

    let pinnedEntity = entityList.filter((entity) => entity.pinned === 'Yes');
    return (
        <div>
            <div style={{ paddingBottom: '10px' }}>
                <Link to={'/'}>
                    <button>Return</button>
                </Link>
            </div>

            {/* List of entities */}
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {pinnedEntity.map((entity) => (
                    <li key={entity.id} style={{ border: '1px solid black', minHeight: '20px', padding: '5px' }}>
                        <Entity entity={entity} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
