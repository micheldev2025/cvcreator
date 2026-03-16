import React from 'react';

interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    jobTitle: string;
    summary: string;
  };
  experience: {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  education: {
    id: string;
    school: string;
    degree: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  skills: string[];
  languages: string[];
  projects: {
    id: string;
    name: string;
    link: string;
    description: string;
  }[];
  template: string;
}

const ResumePreview: React.FC<{ data: ResumeData }> = ({ data }) => {
  const renderTemplate = () => {
    switch (data.template) {
      case 'moderno':
        return (
          <div className="bg-white w-full aspect-[1/1.414] shadow-2xl flex flex-col font-sans print:shadow-none">
            <div className="bg-neutral-900 text-white p-12">
              <h1 className="text-5xl font-bold tracking-tighter mb-2">{data.personalInfo.fullName || "Seu Nome"}</h1>
              <p className="text-xl text-neutral-400 font-light tracking-[0.2em] uppercase">{data.personalInfo.jobTitle || "Seu Cargo"}</p>
              <div className="mt-8 flex flex-wrap gap-6 text-xs text-neutral-400">
                {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
                {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
                {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
              </div>
            </div>
            <div className="p-12 grid grid-cols-3 gap-12 flex-grow">
              <div className="col-span-2 space-y-10">
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-widest mb-4 text-neutral-900 border-l-4 border-black pl-4">Experiência</h2>
                  <div className="space-y-8">
                    {data.experience.map(exp => (
                      <div key={exp.id}>
                        <h3 className="font-bold text-base">{exp.position}</h3>
                        <p className="text-sm text-neutral-500 mb-2">{exp.company} | {exp.startDate} — {exp.endDate}</p>
                        <p className="text-sm leading-relaxed text-neutral-600">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-widest mb-4 text-neutral-900 border-l-4 border-black pl-4">Educação</h2>
                  <div className="space-y-6">
                    {data.education.map(edu => (
                      <div key={edu.id}>
                        <h3 className="font-bold text-base">{edu.degree}</h3>
                        <p className="text-sm text-neutral-500">{edu.school} | {edu.startDate} — {edu.endDate}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <div className="col-span-1 space-y-10">
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-widest mb-4 text-neutral-900">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill, i) => (
                      <span key={i} className="bg-neutral-100 text-neutral-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">{skill}</span>
                    ))}
                  </div>
                </section>
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-widest mb-4 text-neutral-900">Idiomas</h2>
                  <div className="space-y-2">
                    {data.languages.map((lang, i) => (
                      <p key={i} className="text-sm text-neutral-600">{lang}</p>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        );

      case 'minimalista':
        return (
          <div className="bg-white w-full aspect-[1/1.414] shadow-2xl p-16 font-sans print:shadow-none">
            <header className="mb-16 text-center">
              <h1 className="text-4xl font-light tracking-[0.3em] uppercase mb-4">{data.personalInfo.fullName || "Seu Nome"}</h1>
              <div className="h-px w-20 bg-black mx-auto mb-6" />
              <div className="flex justify-center gap-6 text-[10px] uppercase tracking-widest text-neutral-400">
                <span>{data.personalInfo.email}</span>
                <span>{data.personalInfo.phone}</span>
                <span>{data.personalInfo.location}</span>
              </div>
            </header>
            <div className="max-w-2xl mx-auto space-y-16">
              <section>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-8 text-center text-neutral-300">Experiência</h2>
                <div className="space-y-12">
                  {data.experience.map(exp => (
                    <div key={exp.id} className="text-center">
                      <h3 className="text-sm font-bold uppercase tracking-widest mb-1">{exp.position}</h3>
                      <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-4">{exp.company} / {exp.startDate} — {exp.endDate}</p>
                      <p className="text-xs leading-relaxed text-neutral-500 max-w-lg mx-auto">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-8 text-center text-neutral-300">Habilidades</h2>
                <div className="flex justify-center flex-wrap gap-x-8 gap-y-4">
                  {data.skills.map((skill, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-widest text-neutral-600">{skill}</span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        );

      case 'tech':
        return (
          <div className="bg-white w-full aspect-[1/1.414] shadow-2xl flex font-mono print:shadow-none">
            <div className="w-1/3 bg-neutral-50 p-10 border-r border-neutral-200">
              <div className="mb-10">
                <div className="w-20 h-20 bg-black mb-6" />
                <h1 className="text-xl font-bold mb-2 leading-tight">{data.personalInfo.fullName || "USER_NAME"}</h1>
                <p className="text-xs text-neutral-500">{data.personalInfo.jobTitle || "STACK_DEVELOPER"}</p>
              </div>
              <div className="space-y-8">
                <section>
                  <h2 className="text-[10px] font-bold mb-4 text-neutral-400 uppercase tracking-widest">// CONTACT</h2>
                  <div className="space-y-2 text-[10px]">
                    <p>{data.personalInfo.email}</p>
                    <p>{data.personalInfo.phone}</p>
                    <p>{data.personalInfo.location}</p>
                  </div>
                </section>
                <section>
                  <h2 className="text-[10px] font-bold mb-4 text-neutral-400 uppercase tracking-widest">// STACK</h2>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill, i) => (
                      <span key={i} className="bg-black text-white text-[9px] px-2 py-1">{skill}</span>
                    ))}
                  </div>
                </section>
              </div>
            </div>
            <div className="w-2/3 p-12 space-y-12">
              <section>
                <h2 className="text-xs font-bold mb-6 flex items-center gap-2">
                  <span className="text-neutral-300">01.</span> EXPERIÊNCIA
                </h2>
                <div className="space-y-8">
                  {data.experience.map(exp => (
                    <div key={exp.id}>
                      <h3 className="text-sm font-bold">{exp.position} @ {exp.company}</h3>
                      <p className="text-[10px] text-neutral-400 mb-3">{exp.startDate} - {exp.endDate}</p>
                      <p className="text-xs leading-relaxed text-neutral-600">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <h2 className="text-xs font-bold mb-6 flex items-center gap-2">
                  <span className="text-neutral-300">02.</span> EDUCAÇÃO
                </h2>
                <div className="space-y-4">
                  {data.education.map(edu => (
                    <div key={edu.id}>
                      <h3 className="text-sm font-bold">{edu.degree}</h3>
                      <p className="text-[10px] text-neutral-500">{edu.school} / {edu.startDate} - {edu.endDate}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        );

      case 'criativo':
        return (
          <div className="bg-white w-full aspect-[1/1.414] shadow-2xl p-12 font-sans print:shadow-none relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-900 -mr-32 -mt-32 rotate-45" />
            <header className="relative z-10 mb-16">
              <h1 className="text-6xl font-black tracking-tighter mb-2">{data.personalInfo.fullName || "NOME"}</h1>
              <p className="text-2xl font-bold text-neutral-300 italic">{data.personalInfo.jobTitle || "CRIATIVO"}</p>
            </header>
            <div className="grid grid-cols-12 gap-12 relative z-10">
              <div className="col-span-8 space-y-12">
                <section>
                  <h2 className="text-4xl font-black tracking-tighter mb-8 italic outline-text">EXPERIÊNCIA</h2>
                  <div className="space-y-10">
                    {data.experience.map(exp => (
                      <div key={exp.id} className="border-l-2 border-black pl-6">
                        <h3 className="text-lg font-bold uppercase">{exp.position}</h3>
                        <p className="text-sm font-bold mb-4">{exp.company} / {exp.startDate} - {exp.endDate}</p>
                        <p className="text-sm leading-relaxed text-neutral-600">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <div className="col-span-4 space-y-12">
                <section>
                  <h2 className="text-xl font-black mb-6 uppercase">CONTATO</h2>
                  <div className="space-y-2 text-sm font-medium">
                    <p>{data.personalInfo.email}</p>
                    <p>{data.personalInfo.phone}</p>
                    <p>{data.personalInfo.location}</p>
                  </div>
                </section>
                <section>
                  <h2 className="text-xl font-black mb-6 uppercase">SKILLS</h2>
                  <div className="flex flex-col gap-2">
                    {data.skills.map((skill, i) => (
                      <span key={i} className="text-sm font-bold border-b-2 border-neutral-100 pb-1">{skill}</span>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        );

      case 'primeiro-emprego':
        return (
          <div className="bg-white w-full aspect-[1/1.414] shadow-2xl p-12 font-sans print:shadow-none">
            <header className="mb-12 border-b-4 border-neutral-100 pb-8">
              <h1 className="text-3xl font-bold mb-2">{data.personalInfo.fullName || "Seu Nome"}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
                <span>{data.personalInfo.email}</span>
                <span>•</span>
                <span>{data.personalInfo.phone}</span>
                <span>•</span>
                <span>{data.personalInfo.location}</span>
              </div>
            </header>
            <div className="space-y-12">
              <section>
                <h2 className="text-lg font-bold mb-4 bg-neutral-100 px-4 py-1 inline-block">Objetivo Profissional</h2>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {data.personalInfo.summary || "Busco minha primeira oportunidade profissional para aplicar meus conhecimentos e desenvolver novas habilidades em um ambiente colaborativo."}
                </p>
              </section>
              <section>
                <h2 className="text-lg font-bold mb-4 bg-neutral-100 px-4 py-1 inline-block">Formação Acadêmica</h2>
                <div className="space-y-6">
                  {data.education.map(edu => (
                    <div key={edu.id}>
                      <h3 className="font-bold text-base">{edu.degree}</h3>
                      <p className="text-sm text-neutral-500">{edu.school} | {edu.startDate} — {edu.endDate}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <h2 className="text-lg font-bold mb-4 bg-neutral-100 px-4 py-1 inline-block">Habilidades e Cursos</h2>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold mb-3 uppercase tracking-wider">Principais Skills</h3>
                    <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1">
                      {data.skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-3 uppercase tracking-wider">Idiomas</h3>
                    <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1">
                      {data.languages.map((lang, i) => <li key={i}>{lang}</li>)}
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );

      default: // Profissional
        return (
          <div className="bg-white w-full aspect-[1/1.414] shadow-2xl p-12 text-black font-sans print:shadow-none print:p-0">
            <header className="mb-10 border-b-2 border-black pb-8">
              <h1 className="text-4xl font-serif font-bold tracking-tighter mb-2 uppercase">
                {data.personalInfo.fullName || "Seu Nome"}
              </h1>
              <p className="text-lg text-neutral-600 font-medium uppercase tracking-widest mb-4">
                {data.personalInfo.jobTitle || "Seu Cargo"}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-500 uppercase tracking-wider">
                {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
                {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
                {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
                {data.personalInfo.website && <span>{data.personalInfo.website}</span>}
              </div>
            </header>

            <div className="grid grid-cols-3 gap-12">
              <div className="col-span-2 space-y-10">
                {data.personalInfo.summary && (
                  <section>
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b border-neutral-100 pb-2">Perfil</h2>
                    <p className="text-sm leading-relaxed text-neutral-700">{data.personalInfo.summary}</p>
                  </section>
                )}
                {data.experience.length > 0 && (
                  <section>
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 border-b border-neutral-100 pb-2">Experiência</h2>
                    <div className="space-y-8">
                      {data.experience.map((exp) => (
                        <div key={exp.id}>
                          <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-sm uppercase">{exp.position}</h3>
                            <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">{exp.startDate} — {exp.endDate}</span>
                          </div>
                          <p className="text-xs text-neutral-500 font-medium mb-3 uppercase tracking-widest">{exp.company}</p>
                          <p className="text-xs leading-relaxed text-neutral-600 whitespace-pre-line">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
              <div className="col-span-1 space-y-10">
                {data.education.length > 0 && (
                  <section>
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 border-b border-neutral-100 pb-2">Educação</h2>
                    <div className="space-y-6">
                      {data.education.map((edu) => (
                        <div key={edu.id}>
                          <h3 className="font-bold text-xs uppercase mb-1">{edu.degree}</h3>
                          <p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">{edu.school}</p>
                          <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest">{edu.startDate} — {edu.endDate}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
                {data.skills.length > 0 && (
                  <section>
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 border-b border-neutral-100 pb-2">Habilidades</h2>
                    <div className="flex flex-wrap gap-2">
                      {data.skills.map((skill, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-widest font-medium text-neutral-600 border border-neutral-100 px-2 py-1">{skill}</span>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        );
    }
  };

  return renderTemplate();
};

export default ResumePreview;
