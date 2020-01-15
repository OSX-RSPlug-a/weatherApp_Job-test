import React from 'react'

import './style-form.css'; 

let Form = (props) => {
    return (
        <form onSubmit={props.getConfig}>

            <input
            type='text'
            placeholder='Cidade'
            name='city'
            />

            <input
            type='text'
            placeholder='País'
            name='country'
            />

            <button>Enviar</button>

        </form>
    )
}

export default Form; 