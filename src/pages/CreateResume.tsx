import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { motion } from 'motion/react';
import { Download, Plus, Trash2, User, Briefcase, GraduationCap, Code, Globe, FolderOpen, Layout } from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import ResumePreview from '../components/ResumePreview';

const CreateResume: React.FC = () => {
  const { resumeData, setResumeData } = useResume();
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: `Curriculo_${resumeData.personalInfo.fullName.replace(/\s+/g, '_')}`,
  });

  const updatePersonalInfo = (field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const addItem = (section: 'experience' | 'education' | 'projects') => {
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      ...(section === 'experience' ? { company: '', position: '', startDate: '', endDate: '', description: '' } :
         section === 'education' ? { school: '', degree: '', startDate: '', endDate: '', description: '' } :
         { name: '', link: '', description: '' })
    };
    setResumeData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const removeItem = (section: 'experience' | 'education' | 'projects', id: string) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].filter((item: any) => item.id !== id)
    }));
  };

  const updateItem = (section: 'experience' | 'education' | 'projects', id: string, field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].map((item: any) => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skills = e.target.value.split(',').map(s => s.trim());
    setResumeData(prev => ({ ...prev, skills }));
  };

  const handleLanguagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const languages = e.target.value.split(',').map(l => l.trim());
    setResumeData(prev => ({ ...prev, languages }));
  };

  return (
    <div className="pt-28 pb-20 bg-neutral-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Editor Sidebar */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="bg-white p-8 border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-2 mb-8 pb-4 border-b border-neutral-100">
                <Layout size={20} />
                <h2 className="text-sm uppercase tracking-widest font-bold">Modelo do Currículo</h2>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {['profissional', 'moderno', 'minimalista', 'tech', 'criativo', 'primeiro-emprego'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setResumeData(prev => ({ ...prev, template: t }))}
                    className={`text-[10px] uppercase tracking-widest font-bold py-2 px-1 border transition-all ${
                      resumeData.template === t 
                        ? 'bg-black text-white border-black' 
                        : 'bg-white text-neutral-400 border-neutral-200 hover:border-black hover:text-black'
                    }`}
                  >
                    {t.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-2 mb-8 pb-4 border-b border-neutral-100">
                <User size={20} />
                <h2 className="text-sm uppercase tracking-widest font-bold">Informações Pessoais</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">Nome Completo</label>
                  <input 
                    type="text" 
                    value={resumeData.personalInfo.fullName}
                    onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                    className="w-full border-b border-neutral-200 py-2 focus:border-black outline-none transition-colors text-sm"
                    placeholder="Ex: João Silva"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">Cargo Pretendido</label>
                  <input 
                    type="text" 
                    value={resumeData.personalInfo.jobTitle}
                    onChange={(e) => updatePersonalInfo('jobTitle', e.target.value)}
                    className="w-full border-b border-neutral-200 py-2 focus:border-black outline-none transition-colors text-sm"
                    placeholder="Ex: Desenvolvedor Full Stack"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">E-mail</label>
                  <input 
                    type="email" 
                    value={resumeData.personalInfo.email}
                    onChange={(e) => updatePersonalInfo('email', e.target.value)}
                    className="w-full border-b border-neutral-200 py-2 focus:border-black outline-none transition-colors text-sm"
                    placeholder="joao@exemplo.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">Telefone</label>
                  <input 
                    type="text" 
                    value={resumeData.personalInfo.phone}
                    onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                    className="w-full border-b border-neutral-200 py-2 focus:border-black outline-none transition-colors text-sm"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">Resumo Profissional</label>
                  <textarea 
                    value={resumeData.personalInfo.summary}
                    onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                    className="w-full border border-neutral-200 p-3 focus:border-black outline-none transition-colors text-sm h-32 resize-none"
                    placeholder="Conte um pouco sobre sua trajetória e objetivos..."
                  />
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-white p-8 border border-neutral-200 shadow-sm">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <Briefcase size={20} />
                  <h2 className="text-sm uppercase tracking-widest font-bold">Experiência Profissional</h2>
                </div>
                <button onClick={() => addItem('experience')} className="text-xs uppercase tracking-widest font-bold flex items-center gap-1 hover:text-neutral-500 transition-colors">
                  <Plus size={14} /> Adicionar
                </button>
              </div>
              <div className="space-y-8">
                {resumeData.experience.map((exp) => (
                  <div key={exp.id} className="p-4 border border-neutral-50 relative group">
                    <button 
                      onClick={() => removeItem('experience', exp.id)}
                      className="absolute top-2 right-2 text-neutral-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <Trash2 size={16} />
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        placeholder="Empresa"
                        value={exp.company}
                        onChange={(e) => updateItem('experience', exp.id, 'company', e.target.value)}
                        className="text-sm border-b border-neutral-100 py-1 outline-none focus:border-black"
                      />
                      <input 
                        placeholder="Cargo"
                        value={exp.position}
                        onChange={(e) => updateItem('experience', exp.id, 'position', e.target.value)}
                        className="text-sm border-b border-neutral-100 py-1 outline-none focus:border-black"
                      />
                      <input 
                        placeholder="Início"
                        value={exp.startDate}
                        onChange={(e) => updateItem('experience', exp.id, 'startDate', e.target.value)}
                        className="text-sm border-b border-neutral-100 py-1 outline-none focus:border-black"
                      />
                      <input 
                        placeholder="Fim (ou Atual)"
                        value={exp.endDate}
                        onChange={(e) => updateItem('experience', exp.id, 'endDate', e.target.value)}
                        className="text-sm border-b border-neutral-100 py-1 outline-none focus:border-black"
                      />
                      <textarea 
                        placeholder="Descrição das atividades..."
                        value={exp.description}
                        onChange={(e) => updateItem('experience', exp.id, 'description', e.target.value)}
                        className="text-sm border border-neutral-100 p-2 outline-none focus:border-black md:col-span-2 h-24 resize-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white p-8 border border-neutral-200 shadow-sm">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <GraduationCap size={20} />
                  <h2 className="text-sm uppercase tracking-widest font-bold">Educação</h2>
                </div>
                <button onClick={() => addItem('education')} className="text-xs uppercase tracking-widest font-bold flex items-center gap-1 hover:text-neutral-500 transition-colors">
                  <Plus size={14} /> Adicionar
                </button>
              </div>
              <div className="space-y-8">
                {resumeData.education.map((edu) => (
                  <div key={edu.id} className="p-4 border border-neutral-50 relative group">
                    <button 
                      onClick={() => removeItem('education', edu.id)}
                      className="absolute top-2 right-2 text-neutral-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <Trash2 size={16} />
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        placeholder="Instituição"
                        value={edu.school}
                        onChange={(e) => updateItem('education', edu.id, 'school', e.target.value)}
                        className="text-sm border-b border-neutral-100 py-1 outline-none focus:border-black"
                      />
                      <input 
                        placeholder="Curso / Grau"
                        value={edu.degree}
                        onChange={(e) => updateItem('education', edu.id, 'degree', e.target.value)}
                        className="text-sm border-b border-neutral-100 py-1 outline-none focus:border-black"
                      />
                      <input 
                        placeholder="Início"
                        value={edu.startDate}
                        onChange={(e) => updateItem('education', edu.id, 'startDate', e.target.value)}
                        className="text-sm border-b border-neutral-100 py-1 outline-none focus:border-black"
                      />
                      <input 
                        placeholder="Fim"
                        value={edu.endDate}
                        onChange={(e) => updateItem('education', edu.id, 'endDate', e.target.value)}
                        className="text-sm border-b border-neutral-100 py-1 outline-none focus:border-black"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Languages */}
            <div className="bg-white p-8 border border-neutral-200 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-6 pb-2 border-b border-neutral-100">
                    <Code size={18} />
                    <h2 className="text-sm uppercase tracking-widest font-bold">Habilidades</h2>
                  </div>
                  <input 
                    placeholder="React, Node.js, Design..."
                    value={resumeData.skills.join(', ')}
                    onChange={handleSkillsChange}
                    className="w-full text-sm border-b border-neutral-100 py-2 outline-none focus:border-black"
                  />
                  <p className="text-[10px] text-neutral-400 mt-2">Separe por vírgula</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-6 pb-2 border-b border-neutral-100">
                    <Globe size={18} />
                    <h2 className="text-sm uppercase tracking-widest font-bold">Idiomas</h2>
                  </div>
                  <input 
                    placeholder="Inglês (Avançado), Espanhol..."
                    value={resumeData.languages.join(', ')}
                    onChange={handleLanguagesChange}
                    className="w-full text-sm border-b border-neutral-100 py-2 outline-none focus:border-black"
                  />
                  <p className="text-[10px] text-neutral-400 mt-2">Separe por vírgula</p>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Sidebar */}
          <div className="w-full lg:w-1/2">
            <div className="sticky top-28">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-400">Pré-visualização</h2>
                <button 
                  onClick={() => handlePrint()}
                  className="btn-elegant py-2 px-4 flex items-center gap-2"
                >
                  <Download size={14} /> Baixar PDF
                </button>
              </div>
              <div className="bg-neutral-200 p-4 md:p-10 shadow-inner overflow-auto max-h-[calc(100vh-200px)]">
                <div ref={componentRef}>
                  <ResumePreview data={resumeData} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateResume;
