import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { useToast } from '@/components/ui/use-toast';

const navLinks = [
    // ... (same as before)
    { href: '/', label: 'Home' },
    { href: '/pricing', label: 'Pricing' },
    // ... etc.
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const { toast } = useToast();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const handleSignup = (e) => {
        e.preventDefault();
        toast({
            title: "قيد التطوير",
            description: "صفحة التسجيل لا تزال قيد الإنشاء.",
        });
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B0F1A] border-b border-gray-800' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-4">
                        <Link to="/" className="text-2xl font-bold">
                            <Logo />
                        </Link>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E90FF] to-[#FF69B4]">VOSTRON AI</span>
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`text-sm font-medium transition-colors hover:text-[#A27BFF] ${location.pathname === item.path ? 'text-white' : 'text-gray-400'}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/login" className="text-sm font-medium text-gray-400 hover:text-white">
                            Login
                        </Link>
                        <button
                            onClick={handleSignup}
                            className="bg-[#A27BFF] text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                        >
                            Sign Up
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white"
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden opacity-95">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-800">
                        {navLinks.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={handleLinkClick}
                                className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-[#A27BFF]"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="border-t border-gray-700 pt-4 mt-4">
                            <Link to="/login" onClick={handleLinkClick} className="block px-3 py-2 ...">Login</Link>
                            <button onClick={handleSignup} className="w-full text-left block px-3 py-2 ...">Sign Up</button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
