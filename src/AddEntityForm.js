import {
    addEntity,
    inputCategory,
    inputTitle,
    inputDescription,
    inputPrice,
    inputCountry,
    inputTravelPeriod,
    inputImageURL,
} from './entityReducer.js';
import { useDispatch, useSelector } from 'react-redux';
import { AddEntitySubmitTestId } from './testId.js';

export default function AddEntityForm() {
    const formData = {
        category: useSelector((store) => store.entity.inputCategory),
        title: useSelector((store) => store.entity.inputTitle),
        description: useSelector((store) => store.entity.inputDescription),
        price: useSelector((store) => store.entity.inputPrice),
        country: useSelector((store) => store.entity.inputCountry),
        travelPeriod: useSelector((store) => store.entity.inputTravelPeriod),
        imageURL: useSelector((store) => store.entity.inputImageURL),
    };

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any of the required fields are empty before submitting
        for (const field in formData) {
            if (formData[field].trim() === '') {
                alert(`${field} cannot be empty!`);
                return;
            }
        }

        // Dispatch actions to update the state in your Redux store
        dispatch(addEntity(formData));

        // Optionally, reset the input fields after submission
        dispatch(inputCategory(''));
        dispatch(inputTitle(''));
        dispatch(inputDescription(''));
        dispatch(inputPrice(''));
        dispatch(inputCountry(''));
        dispatch(inputTravelPeriod(''));
        dispatch(inputImageURL(''));
    };


    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '8px' }}>
                <span>Category</span>
                <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => dispatch(inputCategory(e.target.value))}
                    style={{ paddingLeft: '8px'}}
                />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '8px' }}>
                <span>Title</span>
                <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => dispatch(inputTitle(e.target.value))}
                    style={{ paddingLeft: '8px'}}
                />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '8px' }}>
                <span >Description</span>
                <input
                    type="text"
                    value={formData.description}
                    onChange={(e) => dispatch(inputDescription(e.target.value))}
                    style={{ paddingLeft: '8px'}}
                />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '8px' }}>
                <span >Price</span>
                <input
                    type="text"
                    value={formData.price}
                    onChange={(e) => dispatch(inputPrice(e.target.value))}
                    style={{ paddingLeft: '8px'}}
                />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '8px' }}>
                <span >Country</span>
                <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => dispatch(inputCountry(e.target.value))}
                    style={{ paddingLeft: '8px'}}
                />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '8px' }}>
                <span >Travel Period</span>
                <input
                    type="text"
                    value={formData.travelPeriod}
                    onChange={(e) => dispatch(inputTravelPeriod(e.target.value))}
                    style={{ paddingLeft: '8px'}}
                />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column'}}>
                <span >Image URL</span>
                <input
                    type="text"
                    value={formData.imageURL}
                    onChange={(e) => dispatch(inputImageURL(e.target.value))}
                    style={{ paddingLeft: '8px'}}
                />
            </label>

            {/* Submit button */}
            <input type="submit" data-testid={AddEntitySubmitTestId} value="Submit" />
        </form>
    );
}