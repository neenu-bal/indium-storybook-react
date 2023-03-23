import React from 'react';
import './style.css';

const Input = (props) => {
    const { size = 'small', ...rest } = props;
    return (
        <input className={`input ${size}`} {...rest} />
    )
}

export default Input