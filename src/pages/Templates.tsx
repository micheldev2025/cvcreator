import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../context/ResumeContext';

const templates = [
  {
    id: 'profissional',
    name: 'Profissional',
    description: 'Design clássico e elegante, ideal para cargos executivos e corporativos.',
    image: 'https://picsum.photos/seed/professional/400/500',
    features: ['Layout limpo', 'Foco em experiência', 'Tipografia serifada']
  },
  {
    id: 'moderno',
    name: 'Moderno',
    description: 'Visual contemporâneo com toques de cor sutis, perfeito para marketing e vendas.',
    image: 'https://picsum.photos/seed/modern/400/500',
    features: ['Elementos gráficos', 'Hierarquia clara', 'Arrojado']
  },
  {
    id: 'minimalista',
    name: 'Minimalista',
    description: 'Foco total no conteúdo. Menos é mais para profissionais que prezam pela objetividade.',
    image: 'https://picsum.photos/seed/minimal/400/500',
    features: ['Espaçamento amplo', 'Sem distrações', 'Elegante']
  },
  {
    id: 'tech',
    name: 'Tech',
    description: 'Desenvolvido para desenvolvedores e profissionais de TI, com foco em skills técnicas.',
    image: 'https://picsum.photos/seed/tech/400/500',
    features: ['Grid otimizado', 'Destaque para skills', 'Moderno']
  },
  {
    id: 'criativo',
    name: 'Criativo',
    description: 'Layout inovador para designers, artistas e profissionais da área criativa.',
    image: 'https://picsum.photos/seed/creative/400/500',
    features: ['Cores vibrantes', 'Layout único', 'Personalidade']
  },
  {
    id: 'primeiro-emprego',
    name: 'Primeiro Emprego',
    description: 'Focado em educação e habilidades para quem está começando a carreira.',
    image: 'https://picsum.photos/seed/firstjob/400/500',
    features: ['Foco em educação', 'Destaque para cursos', 'Funcional']
  }
];

const Templates: React.FC = () => {
  const navigate = useNavigate();
  const { resumeData, setResumeData } = useResume();

  const selectTemplate = (id: string) => {
    setResumeData(prev => ({ ...prev, template: id }));
    navigate('/criar');
  };

  return (
    <div className="pt-32 pb-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-400 mb-4 block">
              Escolha seu Estilo
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tighter">
              Modelos Profissionais
            </h1>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              Selecione um dos nossos modelos criados por especialistas para destacar seu perfil profissional.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-neutral-200 group overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <img 
                  src={template.image} 
                  alt={template.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => selectTemplate(template.id)}
                    className="bg-white text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
                  >
                    Selecionar
                  </button>
                </div>
                {resumeData.template === template.id && (
                  <div className="absolute top-4 right-4 bg-black text-white p-2 rounded-full">
                    <Check size={16} />
                  </div>
                )}
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 tracking-tight">{template.name}</h3>
                <p className="text-neutral-500 text-sm mb-6 leading-relaxed flex-grow">
                  {template.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {template.features.map(feature => (
                    <li key={feature} className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 flex items-center gap-2">
                      <div className="w-1 h-1 bg-black rounded-full" /> {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => selectTemplate(template.id)}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all"
                >
                  Usar este modelo <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates;
