import React from 'react';
import ErrorBoundary from '../components/error-boundary/error-boundary.component';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import UserComponent from '../features/UserPage/userComponent';

const Main = () => {
    return (
        <div id="main">
            <Router>
                <ErrorBoundary errorMessage="The application has encountered an error.">
                    <React.Fragment>
                        <Route
                            exact
                            path='/'
                            component={UserComponent}
                        />
                        <Route
                            exact
                            path='/home'
                            component={UserComponent}
                        />
                    </React.Fragment>
                </ErrorBoundary>
            </Router>
        </div>
    );
};

export default Main;
