import React, { Fragment } from 'react'

const InputChecked = ({ inputs }) => {
    console.log(inputs)
    return (
        <Fragment>
            {inputs.map((input, i) => (
                <label key={i}>
                    <li>
                        <input onChange={() => input.func(!input.checked)} type={input.type} checked={input.checked} name={input.name} value={input.calue}/>
                       {input.value}
                    </li>
                </label>
            ))}
        </Fragment>
    )
}

export default InputChecked
