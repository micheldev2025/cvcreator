import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappNumber = "5554991268533";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="pt-32 pb-20 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-400 mb-6 block">
              Contato Direto
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tighter leading-tight">
              Fale conosco pelo WhatsApp
            </h1>
            <p className="text-neutral-500 text-lg mb-12 font-light leading-relaxed">
              Clique no botão abaixo para iniciar uma conversa direta e tirar todas as suas dúvidas.
            </p>
            
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white uppercase tracking-widest text-xs font-bold hover:bg-[#128C7E] transition-colors shadow-xl shadow-green-500/20"
            >
              <MessageCircle size={20} />
              Conversar Agora
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
