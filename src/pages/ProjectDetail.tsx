import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { projects } from '../data';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-6xl font-black uppercase mb-6">404 - Not Found</h1>
        <Button onClick={() => navigate('/')}>Kembali ke Beranda</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Back Button Header */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 font-bold uppercase hover:underline mb-8 text-[var(--text-main)]"
        >
          <ArrowLeft size={24} /> Kembali ke Beranda
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <Card variant="primary" className="mb-12">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6">{project.title}</h1>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.techStack.map(tech => (
               <span key={tech} className="px-3 py-1 bg-[var(--tag-bg)] text-[var(--tag-text)] brutal-border font-bold text-sm uppercase">
                 {tech}
               </span>
            ))}
          </div>
        </Card>

        <div className="w-full aspect-video brutal-border brutal-shadow bg-[var(--bg-card)] mb-12 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <Card variant="light" className="mb-12">
          <h2 className="text-3xl font-black uppercase mb-6 border-b-[3px] border-[var(--border-dark)] pb-4">Detail Proyek</h2>
          
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-bold uppercase mb-2">Peran (Role)</h3>
              <p className="text-lg font-medium bg-[var(--accent-pink)] inline-block px-3 py-1 brutal-border">{project.role}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold uppercase mb-2">Tantangan</h3>
              <p className="text-lg font-medium leading-relaxed text-[var(--text-muted)]">{project.challenges}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold uppercase mb-2">Solusi</h3>
              <p className="text-lg font-medium leading-relaxed text-[var(--text-muted)]">{project.solutions}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold uppercase mb-2">Fitur Utama</h3>
              <ul className="list-disc list-outside ml-6 space-y-2 text-lg font-medium text-[var(--text-muted)]">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4 border-t-[3px] border-[var(--border-dark)] mt-8">
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex-1">
              <Button variant="pink" className="w-full flex items-center justify-center gap-2">
                <Github size={20} /> Repository URL
              </Button>
            </a>
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex-1">
              <Button variant="blue" className="w-full flex items-center justify-center gap-2">
                <ExternalLink size={20} /> Live Demo
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};
