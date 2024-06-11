import React from 'react'
import banner from '../assets/banner-bg-2.png'
import play_store from '../assets/play-store.png'
import app_store from '../assets/apple.png'

const WayOrder = () => {
    return (
        <div className='p-20'>
            <div className="flex flex-row select-none bg-left text-secondary pt-5 w-full bg-auto md:bg-cover "
                style={{ backgroundImage: `url(${banner})` }}>
                <div className='flex'>
                    <div className='p-10 flex flex-col items-center'>
                        <h2 className='text-3xl text-left font-semibold text-secondary'>Simple Way to Order Your Food Faster</h2>
                        <p className='text-sm text-left p-5 text-secondary-light'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, possimus at ducimus quas doloremque porro quo dolor dolorem mollitia aliquid optio deleniti eveniet perspiciatis sunt cumque! Reiciendis nostrum sunt aut.</p>
                        <div>
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                <div className='flex px-10 pb-20 justify-center items-center gap-5'>
                    <img src={play_store} alt="" />
                    <img src={app_store} alt="" />
                </div>
            </div>
        </div>
    )
}

export default WayOrder