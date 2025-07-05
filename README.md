#MBC Laboratory Landing Page

Proyek ini merupakan pembuatan landing page MBC Laboratory yang menyajikan beberapa informasi terkait MBC Laboratory aktual dan dibuat dengan pengintegrasian Next.JS dan EmailJS, sehingga mendukung pengunjung untuk dapat meninggalkan pesan yang akan secara otomatis terkirim dan dibalas melalui email

Situs dapat dikunjungi di www.mbctechtest.online

## Struktur Proyek

<pre><code>
technical-test/
├── public/ # Aset publik (gambar, icon, dll)
├── src/
│ ├── app/
│ │ ├── globals.css
│ │ ├── layout.tsx
│ │ └── page.tsx # Halaman utama (Home, Layanan, Kontak, Developer)
│ └── components/ # Komponen UI (Navbar, Footer, dll)
│   └── Navbar.tsx # Halaman utama (Home, Layanan, Kontak, Developer)
├── .env.local # Variabel environment (EmailJS)
├── .git.ignore
├── eslint.config.mjs
├── next.config.ts # Konfigurasi Next.js
├── package-lock.json
├── package.json # Informasi dependensi dan script
├── postcss.config.mjs
├── README.md
└── tsconfig.json
</code></pre>


## Instalasi

Proyek ini menggunakan beberapa framework, sehingga perlu dilakukan instalasi framework setelah clone dilakukan

**npm install**

Setelah framework berhasil diinstal, proyek dapat dieksekusi secara lokal menggunakan

**npm run dev**


## Deployment

Proyek ini menggunakan EmailJS dalam menangani pesan yang ditinggalkan pengunjung, sehingga sebelum dilakukan deployment, key yang dibutuhkan diubah menjadi environment local dengan membuat .env.local pada root proyek dan mengganti key pada page.tsx dengan variabel yang sesuai pada .env.local

Proyek ini menggunakan vercel sebagai deployer, sehingga :

1. Proyek mula-mula disimpan pada repository github
2. Buka vercel dan login dengan akun github
3. Import repository yang sesuai

Karena proyek ini menggunakan custom domain, maka :

1. Buka project settings
2. Buka Domain
3. Klik add domain dan tambahkan domain yang telah dibeli
4. Selanjutnya sesuaikan CNAME dan A pada penyedia domain sesuai dengan yang ada di Vercel dan tunggu beberapa saat


## Konfigurasi SSL dan Backend

Konfigurasi SSL dapat dilihat pada Project > Project settings > Domain.
Pada menu tersebut setiap domain akan memiliki status dari SSLnya masing-masing. Adapun untuk proyek ini, terdapat 3 domain, yaitu
  1. mbctechtest.online
  2. www.mbctechtest.online
  3. technical-test-swart.vercel.app
dan ketiganya memiliki status valid yang ditandai dengan simbol ceklis di sebelah kiri nama domain.

Adapun untuk konfigurasi backend tidak dilakukan, karena EmailJS secara otomatis mengirimkan pesan user. Adapun konfigurasi EmailJS adalah sebagai berikut
  1. Import EmailJS
  2. Buat templat email pada EmailJS
  3. Buat function yang menangani pengiriman email
  4. Buat form HTML dengan nama setiap tag inputnya sesuai dengan yang digunakan pada templat emailJS
