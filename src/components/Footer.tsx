import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <FileText className="w-6 h-6" />
              <span className="text-xl font-serif font-bold tracking-tighter">CVCreator</span>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
              Ajudando profissionais a conquistarem suas melhores oportunidades através de currículos impecáveis e modernos.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Plataforma</h4>
            <ul className="space-y-4">
              <li><Link to="/criar" className="text-sm text-neutral-500 hover:text-black transition-colors">Criar Currículo</Link></li>
              <li><Link to="/modelos" className="text-sm text-neutral-500 hover:text-black transition-colors">Modelos</Link></li>
              <li><Link to="/dicas" className="text-sm text-neutral-500 hover:text-black transition-colors">Dicas de Carreira</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><Link to="/sobre" className="text-sm text-neutral-500 hover:text-black transition-colors">Sobre Nós</Link></li>
              <li><Link to="/contato" className="text-sm text-neutral-500 hover:text-black transition-colors">Contato</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-400 uppercase tracking-widest">
            © 2026 CVCreator. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <Link to="/privacidade" className="text-xs text-neutral-400 uppercase tracking-widest hover:text-black">Privacidade</Link>
            <Link to="/termos" className="text-xs text-neutral-400 uppercase tracking-widest hover:text-black">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
