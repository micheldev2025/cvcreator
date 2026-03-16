import React from 'react';
import { motion } from 'motion/react';

const Terms: React.FC = () => {
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
            Termos de Uso
          </h1>
          
          <div className="prose prose-neutral max-w-none space-y-8 text-neutral-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif font-bold text-black mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar o CVCreator, você concorda em cumprir e estar vinculado a estes Termos de Uso. 
                Se você não concordar com qualquer parte destes termos, não deverá utilizar nossa plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-black mb-4">2. Uso da Plataforma</h2>
              <p>
                O CVCreator fornece ferramentas para a criação de currículos profissionais. Você é o único responsável 
                pela veracidade das informações inseridas e pelo uso que faz dos documentos gerados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-black mb-4">3. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo, design e código da plataforma CVCreator são de nossa propriedade exclusiva. 
                Você tem permissão para usar a ferramenta para fins pessoais de criação de currículos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-black mb-4">4. Limitação de Responsabilidade</h2>
              <p>
                O CVCreator não garante que o uso da plataforma resultará em contratação ou sucesso em processos seletivos. 
                Não nos responsabilizamos por perdas ou danos decorrentes do uso da ferramenta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-black mb-4">5. Modificações no Serviço</h2>
              <p>
                Podemos modificar ou descontinuar qualquer aspecto da plataforma a qualquer momento, sem aviso prévio. 
                Não seremos responsáveis perante você ou terceiros por qualquer modificação ou interrupção do serviço.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
