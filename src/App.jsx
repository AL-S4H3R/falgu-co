import React from 'react'

const App = () => {
    return (
        <div>
            <nav className="flex justify-between border-b-2 shadow-md text-gray-800">
                <div>
                    <header className="m-3 ml-12">
                        <h1 className="text-4xl font-bold">Falgu & Co Ltd.</h1>
                    </header>
                </div>
                <div className="flex m-3 text-xl font-semibold mr-12">
                    <ul className="mx-3 my-2">
                        <li><a href="/">Home</a></li>
                    </ul>
                    <ul className="mx-3 my-2">
                        <li><a href="/">About</a></li>
                    </ul>
                    <ul className="mx-3 my-2">
                        <li><a href="/">Products</a></li>
                    </ul>
                    <ul className="mx-3 my-2">
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                    <ul className="mx-3 my-2">
                        <li><a href="/">Sign In</a></li>
                    </ul>
                </div>
            </nav>
            <div className="flex">
                
            </div>
        </div>
    )
}

export default App
