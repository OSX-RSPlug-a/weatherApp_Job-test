
import React from 'react'

let Config= ({description, city, country, error, temperature}) => {

    function matchValues () {
    if(description) {
        const configDescription = description.split(' ')
        const keyWords = ['cloudy','clouds', 'cloud', 'overcast']
        for(let i = 0; i < configDescription.length; i++) {
            if(keyWords.includes(configDescription[i])) {
                return <i class="material-icons">cloud</i>
            }
        }
    }}

    return (

        <div>
            {city && country && <p>{city}, {country}</p>}
            {temperature && <p>{temperature}  °C</p>}
            {description && <p> Conditions: {description}</p>}
            {error && <p>{error}</p>}
            {description && matchValues()}
        </div>
    )
}

export default Config; 