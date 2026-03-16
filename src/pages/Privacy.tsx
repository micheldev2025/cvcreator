import React from 'react';
import { motion } from 'motion/react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-400 mb-6 block">
            Legal
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-12 tracking-tighter leading-tight">
            Política de Privacidade
          </h1>
          
          <div className="prose prose-neutral max-w-none space-y-8 text-neutral-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif font-bold text-black mb-4">1. Coleta de Dados</h2>
              <p>
                O CVCreator é projetado com a privacidade em primeiro lugar. Não coletamos dados pessoais em nossos servidores. 
                Todas as informações que você insere no gerador de currículos são armazenadas localmente no seu navegador (localStorage).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-black mb-4">2. Uso de Cookies</h2>
              <p>
                Utilizamos apenas cookies essenciais para o funcionamento técnico da plataforma e ferramentas de análise anônima 
                para entender como o site é utilizado, sem identificar usuários individualmente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-black mb-4">3. Compartilhamento de Informações</h2>
              <p>
                Não vendemos, trocamos ou transferimos suas informações para terceiros. Seus dados permanecem sob seu controle 
                exclusivo no seu dispositivo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-black mb-4">4. Segurança</h2>
              <p>
                Implementamos medidas de segurança para manter a integridade da plataforma, mas lembramos que a segurança dos 
                dados armazenados localmente depende da segurança do seu próprio dispositivo e navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-black mb-4">5. Alterações nesta Política</h2>
              <p>
                Reservamos o direito de atualizar esta política a qualquer momento. Recomendamos que você revise esta página 
                periodicamente para se manter informado sobre como estamos protegendo suas informações.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
