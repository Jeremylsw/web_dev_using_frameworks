import { createSlice } from '@reduxjs/toolkit';
import { generateRandomId } from './helper.js';
import { countEntitiesWithYesPinned, generateCurrentTime } from './helper.js';

const entitySlice = createSlice({
    name: 'Entity Slice',
    initialState: {
        entityList: [
            { id: generateRandomId(10), category: 'Japan', title: '3D4N Japan Excursion', pinned: 'No', description: 'test1', price: '3000', country: 'test1', travelPeriod: 'test1', ImageURL: 'test1', DateInserted: generateCurrentTime() },
            { id: generateRandomId(10), category: 'Taiwan', title: '8D3N Taiwan Trial', pinned: 'No', description: 'test1', price: '3000', country: 'test1', travelPeriod: 'test1', ImageURL: 'test1', DateInserted: generateCurrentTime() },
            { id: generateRandomId(10), category: 'Japan', title: '10D8N Japan Marathon', pinned: 'No', description: 'test1', price: '3000', country: 'test1', travelPeriod: 'test1', ImageURL: 'test1', DateInserted: generateCurrentTime() },
        ],
        filterCategories: [],
        selectedEntities: [],
        inputCategory: '',
        inputTitle: '',  // Add inputTitle field
        inputDescription: '',  // Add inputDescription field
        inputPrice: '',  // Add inputPrice field
        inputCountry: '',  // Add inputCountry field
        inputTravelPeriod: '',  // Add inputTravelPeriod field
        inputImageURL: '',  // Add inputImageURL field
        updateCategory: '',
    },
    reducers: {
        addEntity: function (state, action) {
            // action.payload will be the category
            state.entityList.push({
                id: generateRandomId(10),
                category: action.payload.category,
                title: action.payload.title,
                description: action.payload.description,
                price: action.payload.price,
                country: action.payload.country,
                travelPeriod: action.payload.travelPeriod,
                imageURL: action.payload.imageURL,
                DateInserted: generateCurrentTime(),
                pinned: 'No',
            });
        },
        inputTitle: function (state, action) {
            state.inputTitle = action.payload;
        },

        inputDescription: function (state, action) {
            state.inputDescription = action.payload;
        },

        inputPrice: function (state, action) {
            state.inputPrice = action.payload;
        },

        inputCountry: function (state, action) {
            state.inputCountry = action.payload;
        },

        inputTravelPeriod: function (state, action) {
            state.inputTravelPeriod = action.payload;
        },

        inputImageURL: function (state, action) {
            state.inputImageURL = action.payload;
        },

        filterEntity: function (state, action) {
            // action.payload will be the category
            let category = action.payload;
            if (state.filterCategories.includes(category)) {
                // Category is already selected, remove it
                state.filterCategories = state.filterCategories.filter(
                    (selectedCategory) => selectedCategory !== category
                );
            } else {
                // Category is not selected, add it
                state.filterCategories = [...state.filterCategories, category];
            }
        },
        clearFilter: function (state) {
            state.filterCategories = [];
        },
        deleteEntity: function (state, action) {
            // action.payload will be the id
            let entityIds = action.payload;
            const updatedEntities = state.entityList.filter((entity) => !entityIds.includes(entity.id));
            state.entityList = [...updatedEntities];

            // Update filterCategories to remove categories with no entities
            const remainingCategories = [...new Set(updatedEntities.map((entity) => entity.category))];
            // Current state of filterCategories is passed into prevFilterCategories as argument
            state.filterCategories = state.filterCategories.filter((category) =>
                remainingCategories.includes(category)
            );
        },

        selectEntity: function (state, action) {
            let entityId = action.payload;
            if (state.selectedEntities.includes(entityId)) {
                // Entity is already selected, remove it
                state.selectedEntities = state.selectedEntities.filter((id) => id !== entityId);
            } else {
                // Entity is not selected, add it
                state.selectedEntities = [...state.selectedEntities, entityId];
            }
        },

        resetSelectedEntity: function (state) {
            state.selectedEntities = [];
        },

        // Storage for input category in input box
        inputCategory: function (state, action) {
            state.inputCategory = action.payload;
        },

        // Updater for EntityInfo text box input
        updateCategoryText: function (state, action) {
            state.updateCategory = action.payload;
        },

        updateCategory: function (state, action) {
            const indexOfEntity = state.entityList.findIndex((obj) => obj.id === action.payload.id);
            state.entityList[indexOfEntity].category = action.payload.new;
        },

        togglePinEntity: function (state, action) {
            const indexOfEntity = state.entityList.findIndex((obj) => obj.id === action.payload);
            // If pin action but already >= 5 items in pinned list, deny request
            if (state.entityList[indexOfEntity].pinned === 'No' && countEntitiesWithYesPinned(state.entityList) >= 5) {
                alert('ERROR: MAXIMUM NUMBER OF PINNED ENTITIES');
            } else {
                const indexOfEntity = state.entityList.findIndex((obj) => obj.id === action.payload);
                state.entityList[indexOfEntity].pinned =
                    state.entityList[indexOfEntity].pinned === 'Yes' ? 'No' : 'Yes';
            }
        },
    },
});

// Dispatch these to update the state in your component
export const {
    addEntity,
    inputTitle,
    inputDescription,
    inputPrice,
    inputCountry,
    inputTravelPeriod,
    inputImageURL,
    filterEntity,
    clearFilter,
    deleteEntity,
    selectEntity,
    resetSelectedEntity,
    inputCategory,
    updateCategoryText,
    updateCategory,
    togglePinEntity,
} = entitySlice.actions;

// This part gets registered into the store.
export default entitySlice.reducer;
