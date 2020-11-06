import React, { useState } from "react";
import './userComponent.scss';
import Spinner from '../../components/spinner/spinner';

const UserComponent = () => {
    const [loading, setLoading] = useState(false);


    // call api here

    return (
        <div>
            {/* UserListComponent */}
            {/* UserAddComponent */}
            {loading && (
                <div className="FormOverlay">
                    <Spinner />
                </div>
            )}
        </div>
    );
};

export default UserComponent;