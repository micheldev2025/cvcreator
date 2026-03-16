import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Lightbulb, Target, TrendingUp } from 'lucide-react';

const CareerTips: React.FC = () => {
  const tips = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Objetivo Claro",
      desc: "Seja específico sobre o que você busca. Evite frases genéricas como 'busco novos desafios'."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Foco em Resultados",
      desc: "Não liste apenas tarefas. Mostre números, conquistas e como você agregou valor."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Palavras-chave",
      desc: "Use termos técnicos da sua área para ser encontrado facilmente por sistemas de RH."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Educação Contínua",
      desc: "Mantenha sua seção de cursos atualizada com certificações recentes e relevantes."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tighter">Dicas de Carreira</h1>
          <p className="text-neutral-500 max-w-2xl mx-auto font-light text-lg">
            Pequenos detalhes que fazem toda a diferença na hora de conquistar sua vaga dos sonhos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((tip, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-neutral-50 border border-neutral-100 hover:border-black transition-all group"
            >
              <div className="mb-6 text-neutral-400 group-hover:text-black transition-colors">{tip.icon}</div>
              <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">{tip.title}</h3>
              <p className="text-neutral-500 leading-relaxed">{tip.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-black text-white p-12 md:p-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 tracking-tighter">O currículo perfeito não existe, mas o currículo estratégico sim.</h2>
            <p className="text-neutral-400 mb-10 leading-relaxed font-light">
              Lembre-se que o currículo é um documento de marketing pessoal. Ele deve convencer o recrutador a te chamar para uma entrevista em menos de 10 segundos.
            </p>
            <ul className="space-y-4 text-sm uppercase tracking-widest font-bold">
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-white rounded-full" /> Mantenha-o em uma página</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-white rounded-full" /> Revise a gramática 3 vezes</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 bg-white rounded-full" /> Salve sempre em PDF</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerTips;
