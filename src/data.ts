export const projects = [
  {
    id: "1",
    title: "YOLOv8 Object Detection",
    description: "Sistem deteksi objek realtime menggunakan YOLOv8 terintegrasi dengan web interface.",
    role: "Fullstack Machine Learning Engineer",
    challenges: "Membutuhkan deteksi objek dengan akurasi tinggi secara realtime, serta integrasi yang mulus antara model Machine Learning dan web antarmuka.",
    solutions: "Menggunakan algoritma YOLOv8 yang telah di-fine tuning dengan custom dataset untuk mencapai peningkatan akurasi 30%. Membangun backend menggunakan Flask dan merancang antarmuka yang solid dengan HTML/CSS.",
    features: [
      "Deteksi objek realtime dengan latensi sangat rendah.",
      "Custom dataset model training (YOLOv8).",
      "Web interface responsif untuk visualisasi hasil."
    ],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    techStack: ["Python", "Flask", "YOLOv8", "Machine Learning"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com"
  },
  {
    id: "2",
    title: "LSTM Stock Predictor",
    description: "Prediksi harga saham berbasis LSTM dengan visualisasi interaktif.",
    role: "Data Scientist / Python Developer",
    challenges: "Menganalisis pola pergerakan harga saham historis yang kompleks dan menyajikannya dalam bentuk prediksi yang mudah dipahami.",
    solutions: "Menerapkan arsitektur jaringan saraf tiruan Long Short-Term Memory (LSTM) dengan pipeline data menggunakan Pandas, serta memvisualisasikan data secara komprehensif pada antarmuka web.",
    features: [
      "Model prediktif harga saham menggunakan algoritma LSTM.",
      "Visualisasi pergerakan harga historis dan masa depan yang interaktif.",
      "Integrasi database MySQL terotomatisasi untuk penyimpanan data harian."
    ],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    techStack: ["Python", "LSTM", "MySQL", "Pandas"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com"
  },
  {
    id: "3",
    title: "Enterprise Flask API",
    description: "Backend API microservices dengan sistem autentikasi dan database MySQL.",
    role: "Backend Engineer",
    challenges: "Membangun sistem backend API yang mampu melayani concurrent user tinggi dengan response time yang sangat cepat, sambil tetap menjaga keamanan data.",
    solutions: "Mengembangkan API berbasis Flask dengan optimasi arsitektur microservices. Menerapkan JWT Token authentication, rate limiter, serta melakukan indexing strategis pada database MySQL untuk menjaga response time di bawah 100ms.",
    features: [
      "Sistem Autentikasi berbasis JWT Token yang aman.",
      "Manajemen limitasi akses (Rate Limiter) untuk mencegah spam.",
      "Desain skema database MySQL tingkat enterprise dengan query teroptimasi."
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    techStack: ["Python", "Flask", "MySQL", "REST API"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com"
  }
];
