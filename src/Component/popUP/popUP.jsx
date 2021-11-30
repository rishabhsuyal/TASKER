import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { BsPlusCircleFill } from 'react-icons/bs';
import './popUP.css';
import InputG from '../InputG/InputG';


function CustomPop({ addNote }) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    function handleTitle(e) {
        setTitle(e.target.value);

    }

    function handleText(e) {
        setText(e.target.value);
        // 
    }

    function handleSave() {
        addNote(title, text);
        setTitle('');
        setText('');


    }

    return (
        <div>
            <Popup trigger={<BsPlusCircleFill
                size='3rem'
            />}
                modal
                nested
            >
                <div className="pop">
                    <h1>ADD TASK</h1>

                    <InputG
                        handlefun={handleTitle}
                        value={title}
                        name="TITLE"
                    />

                    <InputG
                    name="TEXT"
                        handlefun={handleText}
                        value={text}
                    />


                    <button onClick={handleSave}>ADD</button>
                </div>
            </Popup>
        </div>
    )
}

export default CustomPop;
