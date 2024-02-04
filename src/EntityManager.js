import AddEntityForm from './AddEntityForm.js';
import EntitiesList from './EntitiesList.js';
import FilterEntitiesForm from './FilterEntitiesForm.js';

export default function EntityManager() {
    return (
        <div>
            {/* Add Entity Form */}
            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <AddEntityForm style={{ width: '100vw' }} />
            </div>
            {/* Filter Entities Form */}
            <div style={{ display: 'flex' }}>
                <div style={{ width: '20%' }}>
                    <FilterEntitiesForm />
                </div>
                {/* Entities List */}
                <div style={{ width: '80%' }}>
                    <EntitiesList />
                </div>
            </div>
        </div>
    );
}
