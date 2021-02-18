import React from 'react'
import { faEnvelope, faFax, faMobile, faMobileAlt, faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import wallpaper from './assets/wallpaper_4.jpg'
import nta from './assets/nut.png'
import Navbar from './Navbar'

const App = () => {
    return (
        <div className="bg-gray-50 h-screen w-screen overflow-auto">
            <Navbar/>
            <div 
                style={{
                    backgroundImage:`url(${wallpaper})`,
                    opacity:'100%',
                    height:'75%'
                }}
                className="flex items-start justify-center h-screen object-contain bg-center" 
            >
                <div>
                    <h2 className="text-5xl font-bold mt-32 text-white">Leaders in trading dried fruits, nuts & seeds.</h2>
                    <div className="flex justify-center w-full mt-12">
                        <button className="rounded-full font-medium text-xl p-5 focus:outline-none" style={{backgroundColor:'#f16121',color:'#ffffff'}}>Order Now</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div>
                    <h2 className="text-5xl font-semibold text-gray-900 text-center mt-12 font-serif">
                        We are proud members of
                    </h2>
                    <img src={nta} className="mt-24 ml-24 flex justify-center"/>                
                </div>
            </div>
            <footer className="flex justify-center text-gray-900 font-light p-3 text-lg mt-24">
            © 2021 Falgu & Co Limited | All rights reserved.
            </footer>
        </div>
    )
}

export default App
