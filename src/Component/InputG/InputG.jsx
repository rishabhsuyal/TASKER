import React from 'react';
import './InputG.css';

function InputG({handlefun,value,name}) {
    return (
        <div className="input">
            <input
                placeholder={name}
                onChange={handlefun}
                value={value}
            />
        </div>
    )
}

export default InputG
