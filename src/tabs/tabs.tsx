import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './tabs.css';
import Logo from '../assets/logo.png';

function Tabs() {
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false); 
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <div className="bg-white text-black">
                <ul className="flex justify-between items-center p-4 mr-5 ml-5">
                    <li>
                        <Link to="/">
                            <img src={Logo} alt="Logo" className="h-[40px] object-contain" />
                        </Link>
                    </li>

                    {/* Search TextInput */}
                    <div className="flex flex-1 justify-center">
                        <input
                            type="text"
                            placeholder="Arama yap..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="p-2 border border-gray-300 rounded-md w-1/2 hidden sm:block"
                        />
                    </div>

                    {/* Açılır Mobil Menü */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden flex flex-col items-center justify-center space-y-1"
                    >
                        <span className="block w-6 h-0.5 bg-gray-800"></span>
                        <span className="block w-6 h-0.5 bg-gray-800"></span>
                        <span className="block w-6 h-0.5 bg-gray-800"></span>
                    </button>

                    {/* Menü */}
                    <div
                        className={`flex flex-col space-y-4 ${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:flex-row lg:space-x-8 lg:space-y-0`}
                        style={{ transition: 'max-height 0.3s ease-in-out', maxHeight: isMenuOpen ? '300px' : '0' }}
                    >
                        <li>
                            <Link
                                to="/"
                                className={`text-lg font-semibold font-sans ${
                                    location.pathname === '/' ? 'border-b-2 border-red-500' : ''
                                } hover:border-b-2 hover:border-blue-500`}
                                onClick={closeMenu}
                            >
                                Anasayfa
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={`text-lg font-semibold font-sans ${
                                    location.pathname === '/about' ? 'border-b-2 border-red-500' : ''
                                } hover:border-b-2 hover:border-blue-500`}
                                onClick={closeMenu}
                            >
                                Hakkımızda
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>

            <div className="flex-grow p-6">
                <Routes>
                    <Route path="/" element={<Home />}  />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </div>
    );
}

export default Tabs;
