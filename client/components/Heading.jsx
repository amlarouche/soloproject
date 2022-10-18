import React, { Component } from 'react';
import Button from './Button.jsx'

const Heading = (props) => {
    return (
        <div className='header'>
            <h1>Writing Prompt Timeeee</h1>
            <Button generatePrompt={props.generatePrompt} text={'Generate Prompt!'}/>
        </div>
    )
}

export default Heading;