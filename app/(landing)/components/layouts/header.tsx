'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-4 px-8 mb-8">
            <nav className="max-w-7xl mx-auto px-8 sm:px-6 bg-white/95 lg:px-8 rounded-full border-b border-gray-200 shadow-sm">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="md:w-10 md:h-10 w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
                            <span className="text-white font-bold text-xl">D</span>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Devklit
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                          About
                        </Link>
                        <Link href="#layanan" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                            Layanan
                        </Link>
                        <Link href="#product" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                            Product
                        </Link>
                          <Link href="/karir" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                            Karir
                        </Link>
                        <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                            Contact
                        </Link>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a  href='https://wa.me/628816982294?text=Halo%20saya%20ingin%20konsultasi' 
                        target="_blank" 
                            rel="noopener noreferrer"

                         className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all font-medium">
                            Chat Kami
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Sidebar */}
            <div className={`fixed top-0 left-0 h-screen w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">D</span>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Devklit
                            </span>
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 overflow-y-auto p-6">
                        <nav className="space-y-2">
                            <Link 
                                href="/solutions" 
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-3 text-gray-900 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                            >
                                Solutions
                            </Link>
                            <Link 
                                href="/products" 
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-3 text-gray-900 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                            >
                                Products
                            </Link>
                            <Link 
                                href="/about" 
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-3 text-gray-900 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                            >
                                About
                            </Link>
                            <Link 
                                href="/contact" 
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-3 text-gray-900 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 border-t border-gray-200 space-y-3">
                        <Link 
                            href="/login" 
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-3 text-center text-gray-900 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                        >
                            Sign In
                        </Link>
                        <Link 
                            href="/demo" 
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-center font-medium hover:shadow-lg transition-all"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;