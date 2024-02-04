import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import storage from './storage.js';

export default function RootPage(props) {
    return (
        <div>
            <div>{/* No Links */}</div>
            <div>
                <Provider store={storage}>
                    <Outlet />
                </Provider>
            </div>
        </div>
    );
}
