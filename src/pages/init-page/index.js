import React, {useState} from 'react'

import Head from './../templates/head'
import Form from './../templates/form'
import Config from './config'

import './style-init.css';
  
export default function InitPg () {
    const [config,setConfig] = useState([]);
    const APIKEY = 'f16e6aca0cb0f3d37c07b503b9f6b1ba';

    async function fetchData(e) {
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value
            e.preventDefault()
        const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
            .then( res => res.json())
            .then(data => data)
            if(city && country) {
                setConfig({
                    data: apiData,
                    city: apiData.city,
                    country: apiData.sys.country,
                    description: apiData.config[0].description,
                    temperature: apiData.main.temp,
                    error:""
                })
            }else {
                setConfig({
                  data: '',
                  city: '',
                  country: '',
                  description: '',
                  temperature: '',
                  error:"Por favor insira a cidade e ou o país desejado"
                }
                )
            }
    }
    return (
        <>

            <Head />

            <div className="card">
                
                <h1>Busque como está o clima em sua região</h1>

                <Form getConfig={fetchData} />
                
                <Config
                city={config.city}
                country={config.country}
                description={config.description}
                temperature={config.temperature}
                error={config.error}
                />
                
                {console.log(config.data)}
                
            </div>

        </>
    )
}
