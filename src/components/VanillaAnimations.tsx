import React, { useEffect } from 'react';
import robotGif from './animation/blue_green_ion_cookie_robot_by_treecreationculture_dd6io98.gif';
import darklightGif from './animation/darklight_pixel_practice_by_ghostbunny_x_da7l83c.gif';

export const VanillaAnimations = () => {
  useEffect(() => {
    // Container untuk animasi murni JS
    const container = document.createElement('div');
    container.id = 'vanilla-animations-container';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.pointerEvents = 'none'; // Agar tidak menghalangi klik ke tombol/link
    container.style.zIndex = '9998';
    container.style.overflow = 'hidden';
    document.body.appendChild(container);

    // =========================================================================
    // CARA MENGGANTI GAMBAR/ANIMASI:
    // 1. Cari array "characters" di bawah ini.
    // 2. Untuk menggunakan gambar/GIF Anda sendiri, ubah 'type' menjadi 'img'
    //    dan masukkan URL gambar atau path gambar lokal ke dalam 'content'.
    //    Contoh: { id: 'kucing', type: 'img', content: '/assets/kucing.gif', ... }
    // 3. Untuk menggunakan Emoji, biarkan 'type' sebagai 'text'.
    // =========================================================================
    const now = Date.now();
    const characters = [
      { id: 'robot_gif', type: 'img', content: robotGif, x: 50, y: window.innerHeight - 80, baseSpeed: 1.2, speedX: 1.2, speedY: 0, scaleX: 1, nextSpeedChange: now },
      { id: 'darklight_gif', type: 'img', content: darklightGif, x: 250, y: window.innerHeight - 80, baseSpeed: 1.5, speedX: 1.5, speedY: 0, scaleX: 1, nextSpeedChange: now }
    ];

    const elements: { data: typeof characters[0], el: HTMLElement }[] = [];

    characters.forEach(char => {
      const el = document.createElement('div');
      el.style.position = 'absolute';
      el.style.fontSize = '3rem'; // Ukuran teks emoji
      el.style.filter = 'drop-shadow(2px 4px 0px var(--border-dark))';
      
      if (char.type === 'text') {
        el.innerText = char.content;
      } else {
        const img = document.createElement('img');
        img.src = char.content;
        img.style.width = '64px';
        img.style.height = '64px';
        img.style.objectFit = 'contain';
        el.appendChild(img);
      }
      container.appendChild(el);
      elements.push({ data: char, el });
    });

    let animationId: number;

    const animate = () => {
      const currentTime = Date.now();

      elements.forEach(({ data, el }) => {
        // Dinamika Kecepatan: Ubah kecepatan secara acak (kadang cepat, kadang lambat)
        if (currentTime > data.nextSpeedChange) {
          // Multiplier antara 0.3x (sangat lambat) hingga 1.5x (sedikit cepat)
          const speedMultiplier = 0.3 + Math.random() * 1.2;
          data.speedX = (data.speedX > 0 ? 1 : -1) * data.baseSpeed * speedMultiplier;
          
          if (data.id === 'rocket') {
            data.speedY = (data.speedY > 0 ? 1 : -1) * data.baseSpeed * speedMultiplier * 0.8;
          }
          
          // Ganti kecepatan lagi antara 2 sampai 5 detik kemudian
          data.nextSpeedChange = currentTime + 2000 + Math.random() * 3000;
        }

        // Update posisi
        data.x += data.speedX;
        data.y += data.speedY;

        // Pantulan di sumbu X (kiri / kanan layar)
        if (data.x <= 0 || data.x >= window.innerWidth - 60) {
          data.speedX *= -1; // Balik arah
          data.scaleX = data.speedX > 0 ? 1 : -1; // Balik hadap karakter
          // Jaga agar tidak terjebak di luar batas
          data.x = data.x <= 0 ? 1 : window.innerWidth - 61;
        }

        // Pantulan di sumbu Y (atas / bawah layar) khususnya untuk roket
        if (data.y <= 0 || data.y >= window.innerHeight - 60) {
          if (data.id === 'rocket') {
            data.speedY *= -1;
            data.y = data.y <= 0 ? 1 : window.innerHeight - 61;
          } else {
            // Karakter berjalan di lantai, pastikan tetap di bawah saat resize
            data.y = window.innerHeight - (data.type === 'img' ? 80 : 70);
          }
        }
        
        // Efek mantul / loncat kecil saat berjalan di lantai (menyesuaikan kecepatan)
        let bounceY = 0;
        if (data.id !== 'rocket' && Math.abs(data.speedX) > 0) {
           bounceY = Math.sin(currentTime / 150 * Math.abs(data.speedX)) * 5;
        }

        // Rotasi roket sesuai arah
        let rotation = 0;
        if (data.id === 'rocket') {
           if (data.speedX > 0 && data.speedY < 0) rotation = 45;
           else if (data.speedX > 0 && data.speedY > 0) rotation = 135;
           else if (data.speedX < 0 && data.speedY > 0) rotation = 225;
           else if (data.speedX < 0 && data.speedY < 0) rotation = -45;
        }

        // Terapkan transformasi (x, y, scale, rotate)
        el.style.transform = `translate(${data.x}px, ${data.y + bounceY}px) scaleX(${data.type === 'img' ? 1 : data.scaleX}) rotate(${rotation}deg)`;
        
        // Untuk karakter berupa gambar, kita balik gambarnya saja bukan kontainernya
        if (data.type === 'img') {
           const img = el.querySelector('img');
           const imageScale = data.id === 'darklight_gif' ? -data.scaleX : data.scaleX;
           if (img) img.style.transform = `scaleX(${imageScale})`;
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    // Mulai loop animasi
    animationId = requestAnimationFrame(animate);

    // Cleanup saat komponen dilepas
    return () => {
      cancelAnimationFrame(animationId);
      if (document.body.contains(container)) {
        document.body.removeChild(container);
      }
    };
  }, []);

  return null;
};
