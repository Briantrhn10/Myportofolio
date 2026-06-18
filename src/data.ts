export const projects = [
  {
    id: "1",
    title: "VolleyVision (YOLOv8 & LSTM)",
    description: "Sistem analisis teknik bola voli yang menggunakan integrasi YOLOv8-Pose dan LSTM untuk mengevaluasi gerakan.",
    role: "Machine Learning Engineer & Backend Developer",
    challenges: "Mengklasifikasikan teknik pukulan voli dan memberikan metrik penilaian berdasarkan pergerakan sendi secara akurat dan otomatis.",
    solutions: "Mengekstrak 17 koordinat titik tubuh dengan YOLOv8-Pose dari video masukan, lalu menggunakan model arsitektur LSTM untuk memprediksi jenis teknik. Mengintegrasikannya dalam antarmuka berbasis web dengan Flask.",
    features: [
      "Ekstraksi pose otomatis dari video menggunakan YOLOv8.",
      "Klasifikasi teknik bola voli dengan model LSTM.",
      "Metrik penilaian komprehensif (Stability Score, Speed Score, ROM Score, DTW Distance).",
      "Web interface untuk mengunggah dan menganalisis video."
    ],
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    techStack: ["Python", "YOLOv8", "LSTM", "Flask", "TensorFlow"],
    githubUrl: "https://github.com/Briantrhn10/my-personal-project/tree/main/volleyweb",
    demoUrl: "#"
  },
  {
    id: "2",
    title: "Memory Match Game",
    description: "Permainan asah otak interaktif di mana pemain harus menemukan semua pasangan kartu yang cocok.",
    role: "Frontend Developer",
    challenges: "Memastikan interaksi yang mulus antara input dari pengguna, manajemen state dalam browser, dan memberikan respons visual seketika.",
    solutions: "Mengimplementasikan logika pencocokan kartu yang melacak kartu yang sedang dibalik dan memvalidasi pasangan. Merancang antarmuka pengguna (UI) yang dinamis menggunakan HTML, CSS, dan JavaScript murni.",
    features: [
      "Logika pencocokan kartu untuk memvalidasi pasangan yang tepat.",
      "Umpan balik visual langsung saat kartu dibalik, cocok, atau gagal.",
      "Tata letak responsif yang mudah dimainkan di berbagai ukuran layar."
    ],
    image: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    techStack: ["HTML", "CSS", "JavaScript", "Vanilla JS"],
    githubUrl: "https://github.com/Briantrhn10/my-personal-project/tree/main/game%20web",
    demoUrl: "#"
  },
  {
    id: "3",
    title: "Personal Portfolio Web",
    description: "Website etalase portofolio interaktif yang menonjolkan riwayat pendidikan, keterampilan teknis, dan proyek.",
    role: "Frontend Web Developer",
    challenges: "Menciptakan desain yang menarik, responsif, dan menonjolkan profesionalisme secara unik namun tetap mudah dinavigasi.",
    solutions: "Membangun antarmuka menggunakan React.js dan TailwindCSS dengan gaya desain Brutalism modern. Mengimplementasikan komponen yang reusable dan vanilla animations.",
    features: [
      "Desain antarmuka Brutalism yang tebal dan menarik perhatian.",
      "Navigasi halaman mulus menggunakan React Router (HashRouter).",
      "Sistem pemuatan dinamis untuk daftar proyek dan sertifikasi.",
      "Di-deploy secara otomatis melalui GitHub Actions."
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    techStack: ["React", "TypeScript", "TailwindCSS", "Vite"],
    githubUrl: "https://github.com/Briantrhn10/Myportofolio",
    demoUrl: "https://briantrhn10.github.io/Myportofolio/"
  }
];
