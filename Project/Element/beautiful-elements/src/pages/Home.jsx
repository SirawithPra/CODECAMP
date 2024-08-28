import React from 'react'
import Glowy_buttons from '../components/Glowy_buttons/Glowy_buttons.jsx'
import Reflect_button from '../components/Reflect_button/Reflect_button.jsx'
import Hue_background from '../components/Hue_background/Hue_background.jsx'
import Analog_clock from '../components/Analog_clock/Analog_clock.jsx'
const Home = () => {
    return (
        <div>
            <div className='main-container'>
                <p>Glowy Button</p>
                <Glowy_buttons />
            </div>
            <div className='main-container'>
                <p>Reflect_button</p>
                <Reflect_button />
            </div>
            <div className='main-container'>
                <p>Hue_background</p>
                <Hue_background />
            </div>
            <div className='main-container'>
                <p>Analog_clock</p>
                <Analog_clock/>
            </div>
        </div>
    )
}

export default Home
