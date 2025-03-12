import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faInfoCircle, 
  faSearch, 
  faBars, 
  faTimes,
  faSun,
  faMoon
} from '@fortawesome/free-solid-svg-icons';
import Home from './components/Home';
import About from './components/About';
import './tabs.css';
import Logo from '../assets/logo.png';

function Tabs() {
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const darkMode = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(darkMode);
        if (darkMode) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', (!isDarkMode).toString());
    };

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
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <motion.nav
                initial={false}
                animate={{
                    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 1)',
                    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                }}
                className="sticky top-0 z-50 dark:bg-gray-800 dark:bg-opacity-80 transition-all duration-300"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                src={Logo}
                                alt="Logo"
                                className="h-8 w-auto"
                            />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {/* Arama */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Arama yap..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    className="w-64 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                                />
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
                                />
                            </div>

                            {/* Menü Linkleri */}
                            <div className="flex items-center space-x-6">
                                <Link
                                    to="/"
                                    className={`flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 ${
                                        location.pathname === '/' ? 'text-purple-600 dark:text-purple-400' : ''
                                    }`}
                                >
                                    <FontAwesomeIcon icon={faHome} />
                                    <span>Anasayfa</span>
                                </Link>
                                <Link
                                    to="/about"
                                    className={`flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 ${
                                        location.pathname === '/about' ? 'text-purple-600 dark:text-purple-400' : ''
                                    }`}
                                >
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    <span>Hakkımızda</span>
                                </Link>
                            </div>

                            {/* Dark Mode Toggle */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={toggleDarkMode}
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                            >
                                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center space-x-4">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={toggleDarkMode}
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                            >
                                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                            </motion.button>
                            <button
                                onClick={toggleMenu}
                                className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
                            >
                                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-white dark:bg-gray-800 shadow-lg"
                        >
                            <div className="px-4 py-6 space-y-6">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Arama yap..."
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                        className="w-full px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <Link
                                        to="/"
                                        onClick={closeMenu}
                                        className={`flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 ${
                                            location.pathname === '/' ? 'text-purple-600 dark:text-purple-400' : ''
                                        }`}
                                    >
                                        <FontAwesomeIcon icon={faHome} />
                                        <span>Anasayfa</span>
                                    </Link>
                                    <Link
                                        to="/about"
                                        onClick={closeMenu}
                                        className={`flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 ${
                                            location.pathname === '/about' ? 'text-purple-600 dark:text-purple-400' : ''
                                        }`}
                                    >
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        <span>Hakkımızda</span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            <div className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </div>
    );
}

export default Tabs;
