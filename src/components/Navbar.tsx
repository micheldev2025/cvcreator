import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Criar Currículo', path: '/criar' },
    { name: 'Modelos', path: '/modelos' },
    { name: 'Dicas', path: '/dicas' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <FileText className="w-6 h-6 transition-transform group-hover:scale-110" />
            <span className="text-xl font-serif font-bold tracking-tighter">CVCreator</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-xs uppercase tracking-widest font-medium transition-colors hover:text-black",
                  location.pathname === link.path ? "text-black" : "text-neutral-400"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/criar" className="btn-elegant py-2 px-4">
              Começar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-neutral-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block text-sm uppercase tracking-widest font-medium py-2",
                    location.pathname === link.path ? "text-black" : "text-neutral-400"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/criar"
                onClick={() => setIsOpen(false)}
                className="block btn-elegant text-center"
              >
                Começar Agora
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
