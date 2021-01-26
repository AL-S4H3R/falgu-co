import React from 'react'
import { faEnvelope, faFax, faMobile, faMobileAlt, faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import wallpaper from './assets/wallpaper_3.jpg'

const App = () => {
    return (
        <div className="bg-gray-50 h-screen w-screen">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');
            </style>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap');
            </style>
            <nav className="flex justify-evenly text-gray-800 px-6 bg">
                <div className="mb-9">
                    <header className="m-3 ml-16">
                        <h1 className="text-5xl font-bold text-center mt-5" style={{fontFamily:"'Cookie', cursive"}}>Falgu & Co Ltd.</h1>
                    </header>
                </div>
                <ul className="flex">
                    <li className="flex m-3 p-2 mt-3 items-start">
                        <div className="mx-2 mt-2">
                            <FontAwesomeIcon icon={faSearchLocation} className="text-gray-900 text-3xl"/>
                        </div>
                        <div className="text-gray-700 font-semibold text-center">
                            <p>59, Ruislip Road, Greenford</p>
                            <p>Middlesex, UB6 9QD</p>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li className="flex m-3 p-2 mt-3">
                        <div className="mx-2 mt-2">
                            <FontAwesomeIcon icon={faMobile} className="text-gray-900 text-3xl"/>
                        </div>
                        <div className="text-gray-700 font-semibold flex items-center">
                            <a href="/" className="hover:underline">+44 (0) 7728 389 994</a>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li className="flex m-3 p-2 mt-3">
                        <div className="mx-2 mt-2">
                            <FontAwesomeIcon icon={faFax} className="text-gray-900 text-3xl"/>
                        </div>
                        <div className="text-gray-700 font-semibold flex items-center">
                            <a href="/" className="hover:underline">+44 (0) 2088 134 143</a>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li className="flex m-3 p-2 mt-3">
                        <div className="mx-2 mt-2">
                            <FontAwesomeIcon icon={faEnvelope} className="text-gray-900 text-3xl"/>
                        </div>
                        <div className="text-gray-700 font-semibold flex items-center">
                            <a href="mailto:alpesh@falgucoltd.co.uk" className="hover:underline">alpesh@falgucoltd.co.uk</a>
                        </div>
                    </li>
                </ul>
            </nav>
            <nav className="red navbar rounded-full mx-24 -mt-6 p-4" style={{backgroundColor:'#f16121'}}>
                <div style={{fontFamily:"'Oswald', sans-serif "}} className="mx-4">
                    <ul className="flex items-center justify-evenly">
                        <li className="text-gray-50 uppercase text-2xl">
                            <a href="/" className="hover:underline hover:text-white">About</a>
                        </li>
                        <li className="text-gray-50 uppercase text-2xl">
                            <a href="/" className="hover:underline">Products</a>
                        </li>
                        <li className="text-gray-50 uppercase text-2xl">
                            <a href="/" className="hover:underline">Brands</a>
                        </li>
                        <li className="text-gray-50 uppercase text-2xl">
                            <a href="/" className="hover:underline">Login</a>
                        </li>
                        <li className="text-gray-50 uppercase text-2xl">
                            <a href="/" className="hover:underline">Get in Touch</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div 
                style={{
                    backgroundImage:`url(${wallpaper})`,
                }}
                className="flex items-center justify-center h-screen" 
            >
                jcdkjsd
            </div>
            <footer className="flex justify-center bg-gray-200 text-gray-800 font-bold p-3 text-lg">
            © 2021 Falgu & Co Limited | Design & Engineering - 4L_SAH3R
            </footer>
        </div>
    )
}

export default App
