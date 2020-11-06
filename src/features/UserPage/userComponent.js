import React, { useState, useEffect } from "react";
import './userComponent.scss';
import Spinner from '../../components/spinner/spinner';
import UsersList from './userList';
import { map } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { setUsersAction } from '../../actions/userActions';

const UserComponent = () => {
    const [loading, setLoading] = useState(true);
    const users = useSelector((state) => state.userReducer.users || []);
    const dispatch = useDispatch();
    const usersUrl = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        async function fetchUsers() {
            try {
                let response = await fetch(usersUrl);
                response = await response.json();
                const newUsers = map(response, res => {
                    return {
                        id: res.id,
                        name: res.name,
                        email: res.email
                    };
                });
                dispatch(setUsersAction(newUsers));
                // setUsers(newUsers);
                setLoading(false);
            } catch (e) {
                setLoading(false);
                throw e;
            }
        }

        fetchUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => { console.log(users) }, [users]);


    return (
        <div>
            <UsersList users={users} />

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