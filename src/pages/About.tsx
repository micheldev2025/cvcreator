import React from 'react';
import { motion } from 'motion/react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-400 mb-6 block">
              Nossa História
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tighter leading-tight">
              Democratizando o acesso a currículos de alto nível.
            </h1>
            <div className="space-y-6 text-neutral-500 leading-relaxed font-light text-lg">
              <p>
                O CVCreator nasceu da frustração de ver profissionais talentosos perderem oportunidades por não terem um currículo que fizesse justiça às suas habilidades.
              </p>
              <p>
                Acreditamos que a busca por um emprego não deve ser dificultada por ferramentas complexas ou pagas. Por isso, criamos uma plataforma 100% gratuita, sem necessidade de cadastro, focada no que realmente importa: seu conteúdo.
              </p>
              <p>
                Nossa missão é fornecer as ferramentas necessárias para que qualquer pessoa, independente de sua área de atuação, possa se apresentar de forma profissional e elegante ao mercado.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-neutral-50 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/team/1000/1000" 
                alt="Equipe CVCreator" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-black text-white p-10 hidden md:block">
              <p className="text-4xl font-serif font-bold mb-2">100%</p>
              <p className="text-xs uppercase tracking-widest font-bold text-neutral-400">Gratuito para sempre</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
