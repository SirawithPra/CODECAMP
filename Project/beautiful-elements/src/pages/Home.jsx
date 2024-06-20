import React from 'react'
import Glowy_buttons from '../components/Glowy_buttons/Glowy_buttons.jsx'
import Reflect_button from '../components/Reflect_button/Reflect_button.jsx'
import Hue_background from '../components/Hue_background/Hue_background.jsx'
const Home = () => {
    return (
        <div>
            <div>
                <p>Glowy Button</p>
                <Glowy_buttons />
            </div>
            <div>
                <p>Reflect_button</p>
                <Reflect_button />
            </div>
            <div>
                <p>Hue_background</p>
                <Hue_background />
            </div>
        </div>
    )
}

export default Home
