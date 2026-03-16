import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, FileText, Layout, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-400 mb-6 block">
                Simples • Profissional • Rápido
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-8 tracking-tighter">
                Crie um currículo profissional em minutos
              </h1>
              <p className="text-xl text-neutral-500 mb-10 leading-relaxed font-light">
                Destaque-se no mercado de trabalho com um currículo elegante e moderno. 
                Sem complicações, sem cadastro, 100% gratuito.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/criar" className="btn-elegant flex items-center justify-center gap-2 group">
                  Começar Agora <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/modelos" className="btn-outline flex items-center justify-center">
                  Ver Modelos
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-50 -z-10 hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-full w-full flex items-center justify-center p-20"
          >
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotateZ: [0, -1, 0, 1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
              className="w-full max-w-md aspect-[3/4] bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-neutral-100 p-10 relative perspective-1000 animate-sweep"
            >
              <div className="w-20 h-2 bg-neutral-100 mb-4" />
              <div className="w-full h-4 bg-neutral-900 mb-8" />
              <div className="space-y-4">
                <div className="w-full h-2 bg-neutral-50" />
                <div className="w-full h-2 bg-neutral-50" />
                <div className="w-3/4 h-2 bg-neutral-50" />
                <div className="pt-8 space-y-4">
                  <div className="w-1/2 h-4 bg-neutral-100" />
                  <div className="w-full h-2 bg-neutral-50" />
                  <div className="w-full h-2 bg-neutral-50" />
                </div>
              </div>
              
              {/* Floating elements for extra effect */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-neutral-100/50 backdrop-blur-sm border border-neutral-200 p-4 shadow-lg"
              >
                <div className="w-full h-1 bg-neutral-300 mb-2" />
                <div className="w-full h-1 bg-neutral-300 mb-2" />
                <div className="w-1/2 h-1 bg-neutral-300" />
              </motion.div>

              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/5 rounded-full blur-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Por que escolher o CVCreator?</h2>
            <p className="text-neutral-500 uppercase tracking-widest text-xs font-bold">A ferramenta definitiva para sua carreira</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Instantâneo",
                desc: "Preencha seus dados e veja o resultado em tempo real. Sem esperas."
              },
              {
                icon: <Layout className="w-8 h-8" />,
                title: "Design Moderno",
                desc: "Modelos criados por especialistas em recrutamento para garantir sua aprovação."
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "Sem Cadastro",
                desc: "Privacidade total. Seus dados são seus e não exigimos conta para usar."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-neutral-100 hover:border-black transition-colors group"
              >
                <div className="mb-6 transition-transform group-hover:scale-110 duration-300">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tighter">
            Pronto para o próximo passo?
          </h2>
          <Link to="/criar" className="inline-block px-10 py-4 bg-white text-black uppercase tracking-widest text-xs font-bold hover:bg-neutral-200 transition-colors">
            Criar meu currículo agora
          </Link>
        </div>
        
        {/* Abstract Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square border border-white/5 rounded-full -z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border border-white/5 rounded-full -z-0" />
      </section>
    </div>
  );
};

export default Home;
