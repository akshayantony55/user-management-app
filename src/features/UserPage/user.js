import React from "react";
import PropTypes from "prop-types";
import "./user.scss";

function User(props) {
    const { name, email, id, handleNameFieldChange, handleEmailFieldChange } = props;
    return (
        <div key={id} className="user">
            <input type="text" placeholder="name" defaultValue={name} onBlur={(e) => handleNameFieldChange(id, e.target.value)} /> &nbsp;
            <input type="text" placeholder="email" defaultValue={email} onBlur={(e) => handleEmailFieldChange(id, e.target.value)} />
        </div>
    );
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    handleNameFieldChange: PropTypes.func,
    handleEmailFieldChange: PropTypes.func
};

export default User;