import React, {useState} from 'react';

import { useQuill } from 'react-quilljs';
// or const { useQuill } = require('react-quilljs');

import 'quill/dist/quill.snow.css'; // Add css for snow theme

export default () => {
    const { quill, quillRef } = useQuill();

    const [content, setContent] = useState(null)
    // console.log(quill);    // undefined > Quill Object
    // console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }

    const HandleSave = () => {
        setContent(quill.getContents())
    }

    return (
        <div className="quill-container">
            <div className="quill-editor" ref={quillRef} />
        </div>
    );
};