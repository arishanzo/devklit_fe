import { useMemo } from "react";


export default function DynamicUseMemo ( { targetIndustry , activePlatformId } : {  targetIndustry: string, activePlatformId: string}) {

const dynamicBenefits = useMemo(() => {
    const fallback = {
      items: [
        'Halaman Premium Dinamis',
        'Desain Exclusive & Responsif',
        'SEO Setup Standar',
        'Kelola Layanan/Produk',
        'Integrasi Portfolio & Kontak',
        'Security & Backup System',
        'Support Prioritas Konsultasi'
      ],
      footer: '✨ Solusi IT profesional penunjang bisnis'
    };

    if (targetIndustry === 'E-Commerce / Retail') {
      switch (activePlatformId) {
        case 'konsultasi-redesign':
          return {
            items: [
              'Audit Bocor Keranjang (Cart Abandonment)',
              'UI/UX Redesign Katalog & Toko Online',
              'Audit Kecepatan Checkout & Core Web Vitals',
              'Migrasi DB Produk lama tanpa downtime',
              'Pemeriksaan integritas API RajaOngkir/Payment',
              'Saran optimasi layout Mobile Storefront',
              'Laporan Audit & Analisa Komprehensif',
              'Support Prioritas Sinergi Chat',
              'Training Serah Terima Audit E-Commerce'
            ],
            footer: '✨ Mengoptimalkan konversi & kenyamanan checkout pembeli lama'
          };
        case 'web-dev':
          return {
            items: [
              '15–25 Halaman Premium & Toko Online',
              'Desain Exclusive & Cart Checkout Instan',
              'Integrasi Payment Gateway VA & E-Wallet',
              'Kalkulasi Ongkir Otomatis (RajaOngkir)',
              'Manajemen Produk & Variasi Stok',
              'Sistem Kupon Diskon & Promosi',
              'SEO Advanced & Sitemap Auto-Submit',
              'Notifikasi Order via WhatsApp/Email',
              'Training Admin Kelola Produk & Pesanan'
            ],
            footer: '✨ Tampilan e-commerce profesional & meningkatkan branding toko'
          };
        case 'android-dev':
          return {
            items: [
              '8–18 Screen Storefront Native Feel',
              'Keranjang Belanja & Local Cache SQLite',
              'Push Notification Promo & Cuci Gudang',
              'Sistem Pembayaran Instan VA & QRIS',
              'Integrasi Google Maps Alamat Pembeli',
              'Sistem Barcode / QR Code Scanner Produk',
              'Verifikasi Nomor Pelanggan OTP WhatsApp',
              'Invoice Auto-PDF & Receipt Generator',
              'Training Dashboard Sales & Operasional'
            ],
            footer: '✨ Pengalaman belanja mobile tercepat untuk tingkatkan repeat order'
          };
        case 'custom-dev':
          return {
            items: [
              'Arsitektur Retail Enterprise & Omnichannel',
              'Multi-Warehouse / Sinkronisasi Multi-Gudang',
              'Integrasi ERP Pusat & Sistem POS Kasir',
              'Manajemen Hak Akses Admin Cabang & Kasir',
              'Enterprise Security & Activity Log Karyawan',
              'Real-time Stock Auto-Reconciliation',
              'Cloud Auto-Backup Harian Terjadwal',
              'SLA Prioritas Express Dedicated Support',
              'Training Lengkap & API Dokumentasi Sistem'
            ],
            footer: '✨ Integrasi menyeluruh untuk efisiensi rantai pasok retail Anda'
          };
        default:
          return fallback;
      }
    }

    if (targetIndustry === 'SaaS Aplikasi') {
      switch (activePlatformId) {
        case 'konsultasi-redesign':
          return {
            items: [
              'Audit Keamanan Mutitenant & Data Isolation',
              'Analisa Load Balancer & Skalabilitas Cloud',
              'Redesign UI/UX Dashboard Tenant & Admin',
              'Optimization database query & Indexing',
              'Audit Kepatuhan Keamanan API SaaS',
              'Penilaian Model Subscription & Billing',
              'Laporan Komprehensif Arsitektur SaaS',
              'Support Prioritas Sinergi Chat',
              'Training Transisi Infrastruktur Cloud'
            ],
            footer: '✨ Revitalisasi platform SaaS agar siap menampung ribuan user'
          };
        case 'web-dev':
          return {
            items: [
              'Dashboard User & Admin Premium',
              'Sistem Multi-Tenant & Isolasi Data',
              'Integrasi Payment Gateway Langganan/SaaS',
              'Manajemen User, Kuota & Billing Otomatis',
              'Integrasi Chat Support & Sistem Tiket',
              'Notifikasi Sistem real-time & Email',
              'Optimasi SEO landing page SaaS',
              'Export Laporan Transaksi PDF/Excel',
              'Training Admin Pengelolaan Tenant & Lisensi'
            ],
            footer: '✨ Platform SaaS modern dengan manajemen user terpusat'
          };
        case 'android-dev':
          return {
            items: [
              'Aplikasi Tenant Mobile Responsive Feel',
              'Offline Sync & background sync data',
              'Push notifications interaktif & broadcast',
              'Google login & Multi-role auth',
              'Grafik interaktif performa di mobile',
              'Integrasi API backend SaaS terenkripsi',
              'Sistem keamanan biometrik (Fingerprint)',
              'Panduan Deployment ke Play Store',
              'Training Penggunaan Konsol Tenant'
            ],
            footer: '✨ Akses SaaS instan dari genggaman pelanggan kapan saja'
          };
        case 'custom-dev':
          return {
            items: [
              'Arsitektur Mikroservis Skalabilitas Tinggi',
              'Sistem Auto-billing & Auto-provisioning',
              'Integrasi Custom API & Webhook Service',
              'Auto-scaling Server di Google Cloud Platform',
              'Audit Keamanan Siber & ISO Penyaluran Data',
              'Enterprise Activity Logger & Audit Trail',
              'SLA Prioritas Express Dedicated Support',
              'Custom Database Cluster & Backup Terjadwal',
              'Dokumentasi API lengkap dengan Swagger'
            ],
            footer: '✨ Enterprise SaaS platform mandiri dengan keandalan 99.9% uptime'
          };
        default:
          return fallback;
      }
    }

    if (targetIndustry === 'Gudang / Logistik') {
      switch (activePlatformId) {
        case 'konsultasi-redesign':
          return {
            items: [
              'Audit Kecepatan Alur Distribusi Data',
              'Redesign UX Handheld Scanner / App Lapangan',
              'Saran Optimalisasi Keamanan REST API',
              'Audit Integrasi API Eksternal Kurir & Hub',
              'Analisa Pemrosesan Data Batch Stok',
              'Checkup Keamanan Server Database Logistik',
              'Laporan Hasil Audit Sistem Pergudangan',
              'Prioritas Chat Live Support',
              'Dokumentasi Panduan Rekomendasi UX'
            ],
            footer: '✨ Modernisasi UI logistik menyederhanakan input staf gudang'
          };
        case 'web-dev':
          return {
            items: [
              'Dashboard Pusat Inventaris & Stok',
              'Sistem Multi-Gudang & Multi-Lokasi Rak',
              'Pelacakan Resi & Status Pengiriman',
              'Form Input Barang Masuk & Keluar Instan',
              'Sistem Cetak Label Barcode & Manifest PDF',
              'Export Rekapitulasi Stok Bulanan Excel',
              'Pemberitahuan Stok Menipis Otomatis',
              'Sistem Login Multi-Role (Gudang, Admin, Driver)',
              'Training Pengoperasian Web Manajemen Gudang'
            ],
            footer: '✨ Kontrol penuh stok & pengiriman secara tersentralisasi'
          };
        case 'android-dev':
          return {
            items: [
              'Aplikasi Picker/Packer Lapangan Responsif',
              'Integrasi Kamera Scanner Barcode/QR Kecepatan Tinggi',
              'Pelacakan GPS Kurir secara Live & Real-Time',
              'Offline caching area blind-spot internet',
              'FCM Push notification instruksi tugas driver',
              'Digital Signature penerima paket di screen',
              'Input Foto Bukti Pengiriman (POD)',
              'Sistem Keamanan Akun dengan ID Device',
              'Training Driver & Staff Gudang Lapangan'
            ],
            footer: '✨ Kelola operasional kurir & gudang langsung di lapangan'
          };
        case 'custom-dev':
          return {
            items: [
              'Enterprise Logistik System End-to-End',
              'Sinkronisasi API Multi-Kurir (Sicepat, JNE, POS)',
              'Modul Warehouse Management & Auto-Routing',
              'Integrasi dengan Timbangan / Hardware IoT',
              'Audit Keamanan Log & Serial Traceability',
              'Arsitektur Multi-Tenant Regional Cabang',
              'Database Recovery System & Auto-Mirroring',
              'SLA Kecepatan Respons < 10 Menit Dedicated',
              'Training Komprehensif Seluruh Tim Logistik'
            ],
            footer: '✨ Solusi logistik enterprise penopang kelancaran supply-chain'
          };
        default:
          return fallback;
      }
    }

    if (targetIndustry === 'Kesehatan / Farmasi') {
      switch (activePlatformId) {
        case 'konsultasi-redesign':
          return {
            items: [
              'Audit Kepatuhan Keamanan Data Pasien (HIPAA-Ready)',
              'Redesign UX Formulir Rekam Medis Eletronik',
              'Audit Integrasi API BPJS & Sistem Pembayaran',
              'Optimasi Alur Pendaftaran & Antrean Pasien',
              'Investigasi Kerentanan Database Medis',
              'Penilaian Keamanan Resep Elektronik',
              'Laporan Kepatuhan IT Medis Komprehensif',
              'Dukungan Konsultasi Respons Cepat',
              'Training Tim Pelayanan Medis'
            ],
            footer: '✨ Jaminan kerahasiaan & kepatuhan standar sistem rekam medis'
          };
        case 'web-dev':
          return {
            items: [
              'Sistem Reservasi & Antrean Dokter Online',
              'Dashboard Rekam Medis Eletronik (RME) Pasien',
              'Manajemen Jadwal Praktik Dokter Dinamis',
              'Modul Farmasi: Resep Digital & Stok Obat',
              'Sistem Pembayaran Tagihan Pengobatan',
              'Cetak Kwitansi Medis & Invoice PDF',
              'Notifikasi WhatsApp Pengingat Jadwal Kontrol',
              'Multi-Role: Admin, Dokter, Apoteker & Kasir',
              'Training Admin Rumah Sakit / Klinik'
            ],
            footer: '✨ Solusi digitalisasi klinik meningkatkan kualitas layanan pasien'
          };
        case 'android-dev':
          return {
            items: [
              'Aplikasi Pasien: Daftar Antrean & Riwayat Medis',
              'Konsultasi Chat Pasien-Dokter Interaktif',
              'Push Reminder Minum Obat & Jadwal Periksa',
              'Integrasi Telemedicine Telekonsultasi',
              'Google Maps Rumah Sakit/Fasilitas Kesehatan',
              'Upload Foto Dokumen Rujukan / BPJS',
              'Pemberitahuan Nomor Antrean Real-time via FCM',
              'Enkripsi Data HIPAA & Privasi Pasien',
              'Training Staff Admin untuk Integrasi Aplikasi'
            ],
            footer: '✨ Mendekatkan layanan kesehatan ke genggaman pasien secara aman'
          };
        case 'custom-dev':
          return {
            items: [
              'Sistem Informasi Rumah Sakit (SIRS) Kompleks',
              'Kepatuhan Standar Kemenkes (SatuSehat HL7 FHIR)',
              'Integrasi Inventaris Apotek Multi-Cabang',
              'Enterprise Security & Activity Log Dokter-Perawat',
              'Custom Telemedicine Video calling SDK WebRTC',
              'Cloud Database Enkripsi Menyeluruh (At-Rest & In-Flight)',
              'High Availability Server Backup & Recovery',
              'SLA Prioritas Express Dedicated Support',
              'Training Dokter, Staff & Administrator SIRS'
            ],
            footer: '✨ Standardisasi teknologi rumah sakit berskala nasional'
          };
        default:
          return fallback;
      }
    }

    if (targetIndustry === 'Makanan / Restoran') {
      switch (activePlatformId) {
        case 'konsultasi-redesign':
          return {
            items: [
              'Audit Kecepatan Menu Catalog & Order Load',
              'Redesign UX Aplikasi Kasir / Self-Order Kiosk',
              'Audit Integrasi Printer Thermal / Bluetooth API',
              'Optimasi Load Order di Jam Sibuk (Rush-Hour)',
              'Pemeriksaan Kerentanan DB Menu & Pembayaran',
              'Rekomendasi Skema Loyalitas & Promo',
              'Laporan Evaluasi Sistem F&B Terpadu',
              'Prioritas Chat Whatsapp & Live Support',
              'Training Serah Terima Rekomendasi'
            ],
            footer: '✨ Minimalkan hambatan antrean dengan sistem self-order responsif'
          };
        case 'web-dev':
          return {
            items: [
              'Website Menu Digital QR Code Interactive',
              'Sistem Pemesanan Langsung di Meja (Self-Order)',
              'Dashboard Dapur (Kitchen Display) & Kasir',
              'Manajemen Bahan Baku & Resep (Inventory)',
              'Integrasi E-Wallet & VA Virtual Account',
              'Cetak Struk Order ke Printer Thermal Kasir',
              'Sistem Laporan Laba Rugi F&B Otomatis',
              'Manajemen Kupon Diskon & Member Get Member',
              'Training Staff Kasir & Manajer Restoran'
            ],
            footer: '✨ Menghemat waktu pemesanan & meningkatkan efisiensi staf dapur'
          };
        case 'android-dev':
          return {
            items: [
              'Aplikasi Order Mandiri & Takeaway Pelanggan',
              'Push Notification Promo Flash-Sale Kuliner',
              'Integrasi GPS Tracker Alamat Delivery Pengantaran',
              'Fitur Loyalitas Point & Tukar Voucher',
              'Sistem Scan QR-Code Meja & Check-In',
              'Offline Caching Menu ter-Update Lokal',
              'Verifikasi Akun OTP WhatsApp',
              'Notifikasi Status Pesanan ("Sedang Dimasak")',
              'Training Driver Delivery & Kasir'
            ],
            footer: '✨ Tingkatkan frekuensi order kuliner dengan aplikasi mobile'
          };
        case 'custom-dev':
          return {
            items: [
              'Sistem Franchise & Multi-Outlet Terpusat',
              'Integrasi API POS (Moka, POS Pintar, dll) & Ojek Online',
              'Supply-Chain Bahan Baku Pusat (Central Kitchen)',
              'Laporan Omset & Analitik Tren Menu Konsumsi',
              'Enterprise Security & Activity Log Kasir',
              'Auto-Sync Inventaris Stok Gudang & Bahan Baku',
              'Penyimpanan database cloud redundansi tinggi',
              'SLA Express Standby Call Support Teknis',
              'Training Lengkap Manajemen Pusat & Logistik Cabang'
            ],
            footer: '✨ Integrasi F&B Omnichannel modern untuk ekspansi bisnis kuliner'
          };
        default:
          return fallback;
      }
    }

    // Default Fallback lists per platform for Lainnya
    switch (activePlatformId) {
      case 'konsultasi-redesign':
        return {
          items: [
            'Audit Performa, Keamanan & UX Kustom',
            'Desain UI/UX Eksklusif Baru',
            '1 - 3 Halaman Hasil Redesign Utama',
            'Refactoring Code & CSS Modern',
            'Laporan Audit Komprehensif',
            'Rekomendasi SEO Ringan',
            'Backups Database Lama Aman',
            'Support Prioritas Chat',
            'Training Serah Terima Audit'
          ],
          footer: '✨ Menghidupkan sistem lama dengan performa & UI modern'
        };
      case 'web-dev':
        return {
          items: [
            '10–25 Halaman Premium Kustom',
            'Desain Exclusive & Responsive',
            'SEO Setup Advanced',
            'Multi Layanan / Produk Terstruktur',
            'Integrasi Portfolio & Artikel',
            'Team Profiling Bisnis',
            'Security & SSL Backup',
            'Live Chat & Support Pasca SLA',
            'Training Admin Panel Web CMS'
          ],
          footer: '✨ Tampilan profesional & meningkatkan branding perusahaan'
        };
      case 'android-dev':
        return {
          items: [
            '8–18 Screen / Halaman Interaktif',
            'Desain Exclusive Mobile-Native Feel',
            'Push Notification (FCM Ready)',
            'Offline Local Caching SQLite',
            'Integrasi Google Maps & GPS Tracker',
            'Panduan Upload Google Play Store',
            'Sistem Keamanan Enkripsi Data',
            'Support Prioritas Teknis',
            'Training Dashboard Operasional'
          ],
          footer: '✨ Mobile-first untuk loyalitas & retensi pelanggan'
        };
      case 'custom-dev':
        return {
          items: [
            'Unlimited Halaman / Skema DB kustom',
            'Arsitektur Software Terdistribusi',
            'Integrasi ERP & CRM Internal',
            'Modul Multi-Cabang / Multi-Gudang',
            'Enterprise Security & Activity Log',
            'Cloud Auto-Backup Harian Terjadwal',
            'Core API & Sinkronisasi Eksternal',
            'SLA Prioritas Express Dedicated',
            'Training Lengkap & API Dokumentasi'
          ],
          footer: '✨ Otomasi bisnis kustom untuk skalabilitas maksimal'
        };
      default:
        return fallback;
    }
  }, [activePlatformId, targetIndustry]);




  return {dynamicBenefits }


}