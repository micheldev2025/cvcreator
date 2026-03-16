import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Menu, X, Download } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can add to home screen
      setShowInstallBtn(true);
    });

    window.addEventListener('appinstalled', () => {
      setShowInstallBtn(false);
      setDeferredPrompt(null);
      console.log('PWA was installed');
    });
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
    setShowInstallBtn(false);
  };

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
            
            {showInstallBtn && (
              <button 
                onClick={handleInstallClick}
                className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold bg-neutral-100 px-3 py-2 hover:bg-black hover:text-white transition-all"
              >
                <Download size={12} /> Instalar App
              </button>
            )}

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

              {showInstallBtn && (
                <button 
                  onClick={() => {
                    handleInstallClick();
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-bold bg-neutral-100 py-3 mb-2"
                >
                  <Download size={14} /> Instalar Aplicativo
                </button>
              )}

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
