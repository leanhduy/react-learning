import React, { useState } from 'react'

function Input({ value, setValue }) {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Temp in °C"
        />
    )
}

export default function App() {
    const [value, setValue] = useState('')
    return (
        <div className="App">
            <h1>☃️ Temperature Converter 🌞</h1>
            <Input value={value} setValue={setValue} />
            <Thermometer
                value={value}
                renderProp={() => <Kelvin value={parseInt(value) || 0} />}
            />
            <Thermometer
                value={value}
                renderProp={() => <Fahrenheit value={parseInt(value) || 0} />}
            />
        </div>
    )
}

function Kelvin({ value = 0 }) {
    return <div className="temp">{value + 273.15}K</div>
}

function Fahrenheit({ value = 0 }) {
    return <div className="temp">{(value * 9) / 5 + 32}°F</div>
}

const Thermometer = ({ renderProp, value }) => {
    return renderProp(value)
}
