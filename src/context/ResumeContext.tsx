import React, { createContext, useContext, useState, useEffect } from 'react';

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

const initialData: ResumeData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    jobTitle: '',
    summary: '',
  },
  experience: [],
  education: [],
  skills: [],
  languages: [],
  projects: [],
  template: 'profissional',
};

interface ResumeContextType {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
  resetData: () => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    const saved = localStorage.getItem('cvcreator_data');
    return saved ? JSON.parse(saved) : initialData;
  });

  useEffect(() => {
    localStorage.setItem('cvcreator_data', JSON.stringify(resumeData));
  }, [resumeData]);

  const resetData = () => {
    setResumeData(initialData);
    localStorage.removeItem('cvcreator_data');
  };

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData, resetData }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) throw new Error('useResume must be used within a ResumeProvider');
  return context;
};
