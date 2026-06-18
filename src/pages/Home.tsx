import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { projects } from '../data';
import { LinkedInIcon, GitHubIcon, TikTokIcon, InstagramIcon, DiscordIcon } from '../components/SocialIcons';
import { ArrowUp } from 'lucide-react';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section id="profil" className="max-w-6xl mx-auto px-6 pt-24 pb-20 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            Brian<br />Tarihoran
          </h1>
          <div className="inline-block px-4 py-2 bg-[var(--accent-primary)] text-black brutal-border">
            <h2 className="text-xl md:text-2xl font-bold uppercase">IT Fresh Graduate | Software & Web Developer</h2>
          </div>
          <p className="text-lg font-medium max-w-xl text-[var(--text-muted)]">
            Lulusan baru S1 Teknologi Informasi dengan penguasaan dasar–menengah dalam pemrograman dan machine learning. Memiliki pengalaman mengerjakan proyek pengembangan perangkat lunak serta analisis data berbasis model pembelajaran mesin. Aktif berorganisasi, terbiasa bekerja dalam tim, memiliki kemampuan problem solving dan komunikasi yang baik, serta berorientasi pada hasil.
          </p>
          <div className="flex flex-col gap-3 pt-4">
            <div className="flex items-start gap-3 font-bold"><span className="text-xl">📍</span> <span>Jl. Kolam Jaka Pelangi 1, Kwala Bekala, Medan Johor, Kota Medan, Sumatera Utara</span></div>
            <div className="flex items-center gap-3 font-bold"><span className="text-xl">📞</span> 08226798670</div>
            <div className="flex items-center gap-3 font-bold"><span className="text-xl">📧</span> briyantarihoran@gmail.com</div>
          </div>
          <div className="flex flex-wrap gap-5 pt-6">
            <a href="/CV_Brian.pdf" download="CV_Brian_Tarihoran.pdf">
              <Button variant="primary" className="flex items-center gap-2 font-bold px-6 hover:bg-[var(--bg-card)] hover:text-[var(--text-main)]"><span className="text-xl">📄</span> Download CV</Button>
            </a>
            <a href="https://linkedin.com/in/brian-tarihoran-a947b536b" target="_blank" rel="noreferrer">
              <Button variant="pink" className="flex items-center gap-2"><LinkedInIcon /> LinkedIn</Button>
            </a>
            <a href="https://github.com/Briantrhn10" target="_blank" rel="noreferrer">
              <Button variant="blue" className="flex items-center gap-2"><GitHubIcon /> GitHub</Button>
            </a>
            <a href="https://www.tiktok.com/@briantarihoran" target="_blank" rel="noreferrer">
              <Button variant="primary" className="flex items-center gap-2"><TikTokIcon /> TikTok</Button>
            </a>
            <a href="https://www.instagram.com/brianthrn10_/" target="_blank" rel="noreferrer">
              <Button variant="primary" className="flex items-center gap-2"><InstagramIcon /> Instagram</Button>
            </a>
            <a href="https://discordapp.com/users/469021070004060161" target="_blank" rel="noreferrer">
              <Button variant="primary" className="flex items-center gap-2"><DiscordIcon /> Discord</Button>
            </a>
          </div>
        </div>
        <div className="w-64 h-64 md:w-80 md:h-80 shrink-0">
          <img
            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Brian Tarihoran"
            className="w-full h-full object-cover brutal-border brutal-shadow"
          />
        </div>
      </section>

      {/* Tech Skills */}
      <section className="bg-[var(--bg-tech-section)] border-y-[3px] border-[var(--border-dark)] py-14 mb-20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-10 text-[var(--tech-heading)]">Tech Arsenal</h2>
          <div className="flex flex-wrap gap-4">
            {['Python', 'TypeScript', 'React', 'HTML/CSS', 'Flutter', 'SQL', 'Machine Learning', 'Git', 'Flask', 'REST API', 'Problem Solving', 'Teamwork', 'English'].map(skill => (
              <span key={skill} className="px-5 py-2 font-bold uppercase bg-[var(--tech-badge-bg)] text-[var(--tech-badge-text)] brutal-border brutal-shadow hover:translate-y-2 hover:translate-x-2 hover:!shadow-none transition-all cursor-crosshair">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-12">Pendidikan & Sertifikasi</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card variant="pink" className="flex flex-col gap-4">
            <h3 className="text-3xl font-black uppercase">Universitas Sumatera Utara</h3>
            <div className="inline-block px-3 py-1 bg-[var(--bg-card-alt)] brutal-border w-max font-bold">2019 - 2025 | IPK: 3.51/4.00</div>
            <p className="font-bold text-lg mt-2">Jurusan: Teknologi Informasi</p>
            <div className="bg-[var(--bg-card-alt)] p-4 brutal-border">
              <p className="font-bold uppercase text-sm mb-2">Topik Skripsi:</p>
              <p className="font-medium text-[var(--text-muted)]">Identifikasi Teknik Pukulan Yang Digunakan Pada Permainan Bola Voli Menggunakan YOLO v8 Pose Estimation Dan LSTM</p>
            </div>
          </Card>

          <Card variant="blue" className="flex flex-col gap-4">
            <h3 className="text-3xl font-black uppercase">Sertifikasi & Pelatihan</h3>
            <div className="space-y-4 mt-4 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
              <div className="bg-[var(--bg-card-alt)] p-3 brutal-border brutal-shadow-sm">
                <p className="font-black uppercase text-sm mb-1 text-[var(--accent-primary)]">Dicoding</p>
                <ul className="list-disc list-inside font-bold text-sm space-y-1">
                  <li>Belajar Penerapan Data Science dengan Microsoft Fabric (2026)</li>
                  <li>Introduction to Financial Literacy (2026)</li>
                  <li>Belajar Machine Learning untuk Pemula (2025)</li>
                  <li>Belajar Dasar AI (2025)</li>
                </ul>
              </div>
              <div className="bg-[var(--bg-card-alt)] p-3 brutal-border brutal-shadow-sm">
                <p className="font-black uppercase text-sm mb-1 text-[var(--accent-primary)]">IBM SkillsBuild & Coursera</p>
                <ul className="list-disc list-inside font-bold text-sm space-y-1">
                  <li>Introduction to Generative AI (2025)</li>
                  <li>Introduction to Artificial Intelligence (2025)</li>
                  <li>AI Ethics (2025)</li>
                  <li>Career Management Essentials (2025)</li>
                  <li>Getting Started with Data Warehousing and BI Analytics (2022)</li>
                </ul>
              </div>
              <div className="bg-[var(--bg-card-alt)] p-3 brutal-border brutal-shadow-sm">
                <p className="font-black uppercase text-sm mb-1 text-[var(--accent-primary)]">RevoU</p>
                <ul className="list-disc list-inside font-bold text-sm space-y-1">
                  <li>Intro to Software Engineering (2026)</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Experience & Organization */}
      <section id="experience" className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-12">Pengalaman & Organisasi</h2>
        <div className="space-y-8">

          <div className="bg-[var(--bg-card)] p-6 md:p-8 brutal-border brutal-shadow relative">
            <div className="absolute -top-4 -left-4 bg-[var(--accent-primary)] text-black px-4 py-1 brutal-border font-black uppercase text-xl">Pengalaman</div>
            <div className="mt-4 flex flex-col md:flex-row gap-8">
              <div className="flex-1 bg-[var(--bg-card-alt)] p-6 brutal-border">
                <h3 className="text-2xl font-black uppercase mb-2">Academic Project Developer</h3>
                <div className="inline-block px-2 py-1 bg-[var(--accent-pink)] text-black brutal-border font-bold text-sm mb-4">Agustus 2022 - Desember 2022</div>
                <ul className="list-disc list-outside ml-4 space-y-2 font-medium text-[var(--text-muted)]">
                  <li>Berkontribusi dalam pengembangan aplikasi menggunakan Kotlin pada proyek perkuliahan</li>
                  <li>Melakukan testing, debugging, dan dokumentasi teknis aplikasi</li>
                  <li>Bekerja sama dalam tim 4 orang untuk menyelesaikan aplikasi sesuai target</li>
                </ul>
              </div>
              <div className="flex-1 bg-[var(--bg-card-alt)] p-6 brutal-border">
                <h3 className="text-2xl font-black uppercase mb-2">Academic Project Developer</h3>
                <div className="inline-block px-2 py-1 bg-[var(--accent-pink)] text-black brutal-border font-bold text-sm mb-4">Juli 2020 - Desember 2020</div>
                <ul className="list-disc list-outside ml-4 space-y-2 font-medium text-[var(--text-muted)]">
                  <li>Mengembangkan aplikasi web berbasis PHP dan MySQL sebagai bagian dari proyek perkuliahan</li>
                  <li>Melakukan pengujian fungsional serta penyusunan dokumentasi aplikasi</li>
                  <li>Berkolaborasi dalam tim beranggotakan 4 orang menggunakan pembagian tugas terstruktur</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[var(--bg-card)] p-6 md:p-8 brutal-border brutal-shadow relative mt-16">
            <div className="absolute -top-4 -left-4 bg-[var(--bg-black)] px-4 py-1 brutal-border font-black uppercase text-xl text-[var(--text-white)]">Organisasi</div>
            <h3 className="text-3xl font-black uppercase mt-4 mb-6">Himpunan Mahasiswa Teknologi Informasi – Panitia</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[var(--bg-card-alt)] p-4 brutal-border">
                <div className="font-bold mb-2">September 2022 – November 2022</div>
                <ul className="list-disc list-outside ml-4 text-sm font-medium space-y-1">
                  <li>Menjadi bagian dari Divisi Humas dalam kepanitiaan Gathering Day IT</li>
                  <li>Mengelola komunikasi publik dan internal untuk mendukung kelancaran pelaksanaan acara</li>
                </ul>
              </div>
              <div className="bg-[var(--bg-card-alt)] p-4 brutal-border">
                <div className="font-bold mb-2">Oktober 2021 – Desember 2021</div>
                <ul className="list-disc list-outside ml-4 text-sm font-medium space-y-1">
                  <li>Berperan sebagai anggota Divisi PTT (Perlengkapan, Transportasi, dan Teknis) dalam penyelenggaraan acara Natal TI 2020</li>
                  <li>Mendukung kelancaran aspek teknis dan logistik selama persiapan hingga pelaksanaan acara</li>
                </ul>
              </div>
              <div className="bg-[var(--bg-card-alt)] p-4 brutal-border">
                <div className="font-bold mb-2">Oktober 2021 – November 2021</div>
                <ul className="list-disc list-outside ml-4 text-sm font-medium space-y-1">
                  <li>Menjadi anggota divisi humas dalam menyelenggarakan acara CSOIT 2021</li>
                  <li>Berhasil mengundang lebih dari 100 peserta</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <Card key={project.id} variant={idx % 3 === 0 ? 'pink' : idx % 3 === 1 ? 'blue' : 'primary'} className="flex flex-col">
              <div className="h-48 mb-5 brutal-border overflow-hidden bg-[var(--bg-card-alt)]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover border-b-0 hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-3 line-clamp-1">{project.title}</h3>
              <p className="font-medium mb-4 flex-1 text-[var(--text-muted)]">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-2 py-1 text-xs font-bold uppercase bg-[var(--tag-bg)] text-[var(--tag-text)] brutal-border">
                    {tech}
                  </span>
                ))}
              </div>
              <Button variant="light" className="w-full" onClick={() => navigate(`/project/${project.id}`)}>
                Lihat Detail
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-[var(--cta-bg)] text-[var(--cta-text)] p-8 md:p-12 brutal-border brutal-shadow text-center transition-colors duration-300">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Mari Berkolaborasi!</h2>
          <p className="text-xl font-medium mb-8 max-w-2xl mx-auto opacity-80">Mencari Software Engineer yang berdedikasi dan siap berkontribusi untuk tim Anda? Mari kita diskusikan proyek luar biasa Anda selanjutnya.</p>
          <a href="mailto:briyantarihoran@gmail.com" className="inline-block">
            <Button variant="pink" className="text-xl px-12 py-4 font-black">Kirim Email</Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 pt-10 pb-4 border-t-[3px] border-[var(--border-dark)] flex flex-col md:flex-row justify-between items-center font-bold uppercase gap-6">
        <p>© 2026 Brian Tarihoran</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center">
          <a href="https://www.linkedin.com/in/brian-tarihoran-a947b536b/" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
            <LinkedInIcon className="w-5 h-5" /> LinkedIn
          </a>
          <a href="https://github.com/Briantrhn10" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
            <GitHubIcon className="w-5 h-5" /> GitHub
          </a>
          <a href="https://www.tiktok.com/@briantarihoran" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
            <TikTokIcon className="w-5 h-5" /> TikTok
          </a>
          <a href="https://www.instagram.com/brianthrn10_/" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
            <InstagramIcon className="w-5 h-5" /> Instagram
          </a>
          <a href="https://discordapp.com/users/469021070004060161" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
            <DiscordIcon className="w-5 h-5" /> Discord
          </a>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-4 bg-[var(--accent-primary)] text-black brutal-border brutal-shadow hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all cursor-crosshair"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 stroke-[3]" />
      </button>
    </div>
  );
};
