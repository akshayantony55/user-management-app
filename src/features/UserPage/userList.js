import React from "react";
import PropTypes from "prop-types";
import User from "./user";
import { map } from 'lodash';

function UserList(props) {
    return (
        <div>{map(props.users, user => <User key={user.id} id={user.id} name={user.name} email={user.email} handleNameFieldChange={props.handleNameFieldChange} handleEmailFieldChange={props.handleEmailFieldChange}/>)}</div>
    );
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
    handleNameFieldChange: PropTypes.func,
    handleEmailFieldChange: PropTypes.func
};

export default UserList;