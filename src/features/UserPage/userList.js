import React from "react";
import PropTypes from "prop-types";
import User from "./user";
import { map } from 'lodash';

function UserList(props) {
    return (
        <div>{map(props.users, user => <User key={user.id} name={user.name} email={user.email} />)}</div>
    );
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UserList;