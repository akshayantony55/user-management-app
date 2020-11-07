import React, { useState, useEffect } from "react";
import './userComponent.scss';
import Spinner from '../../components/spinner/spinner';
import UsersList from './userList';
import { map, find, some, isEmpty } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { setUsersAction } from '../../actions/userActions';

const UserComponent = () => {
    const [loading, setLoading] = useState(true);
    const [addUserBtnDisabled, setAddUserBtnDisabled] = useState(true);
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
                newUsers.push({
                    id: newUsers.length + 1,
                    name: '',
                    email: ''
                });
                dispatch(setUsersAction(newUsers));
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

    const handleNameFieldChange = (id, value) => {
        find(users, user => user.id === id).name = value;;
        dispatch(setUsersAction(users));
        setAddUserBtn();
    };

    const handleEmailFieldChange = (id, value) => {
        find(users, user => user.id === id).email = value;;
        dispatch(setUsersAction(users));
        setAddUserBtn();
    }

    const appendInput = () => {
        setAddUserBtnDisabled(true);
        const newUserInput = {
            id: users.length + 1,
            name: '',
            email: ''
        };
        dispatch(setUsersAction(users.concat([newUserInput])));
    }

    const setAddUserBtn = () => {
        const isUserFieldEmpty = some(users, user => isEmpty(user.name) || isEmpty(user.email));
        if ((isUserFieldEmpty && addUserBtnDisabled) || (!isUserFieldEmpty && !addUserBtnDisabled)) {
            return;
        }
        else if ((!isUserFieldEmpty && addUserBtnDisabled) || (isUserFieldEmpty && !addUserBtnDisabled)) {
            setAddUserBtnDisabled(false);
        }
    }

    return (
        <div class="card">
            <div class="userListView">
                <form>
                    <div class="userForm">
                        <UsersList users={users} handleNameFieldChange={handleNameFieldChange} handleEmailFieldChange={handleEmailFieldChange} />
                        <div class="addUserBtn">
                            <button onClick={appendInput} disabled={addUserBtnDisabled}>Add New User</button>
                        </div>
                    </div>
                </form>

                {loading && (
                    <div className="FormOverlay">
                        <Spinner />
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserComponent;