import React from "react";
import PropTypes from "prop-types";
import "./user.scss";

function User(props) {
    return (
        <div className="user">
            <span>{props.name}</span> &nbsp;
            <span>{props.email}</span>
        </div>
    );
}

User.propTypes = {
    name: PropTypes.string.isRequired
};

export default User;