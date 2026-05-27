import { FeatureOption } from "../types";

export const FEATURE_DATABASE: FeatureOption[] = [
  // Platforms (Limited to 1 selection at a time to support dynamic modules display)
  { id: 'konsultasi-redesign', name: 'Redesign website / aplikasi', description: 'Optimasi sistem lama, audit IT komprehensif, & modernisasi UI/UX.', basePrice: 800000, addedDays: 7, category: 'platform' },
  { id: 'web-dev', name: 'Pengembangan Software Web', description: 'Pembuatan website kustom, dashboard internal, landing page premium, & web app.', basePrice: 1400000, addedDays: 14, category: 'platform' },
  { id: 'android-dev', name: 'Aplikasi Android', description: 'Pembuatan aplikasi mobile Android kustom/hybrid sesuai kebutuhan operasional.', basePrice: 1800000, addedDays: 19, category: 'platform' },
  { id: 'custom-dev', name: 'Custom Bisnis Website / Aplikasi', description: 'Solusi software end-to-end kustom, integrasi sistem internal ERP/CRM, & web-app bisnis kompleks.', basePrice: 2200000, addedDays: 25, category: 'platform' },
  
  // Features specifically for "Konsultasi Transformasi Digital / redesign website / aplikasi"
  { id: 'audit-redesign', name: 'Audit Keamanan & Kerentanan Website', description: 'Pemeriksaan performa, SEO, keamanan sistem, dan usulan modernisasi UI/UX.', basePrice: 150000, addedDays: 2, category: 'feature', allowedPlatforms: ['konsultasi-redesign'] },
  { id: 'refactor-uiux', name: 'Refactoring UI/UX ke Tailwind Modern', description: 'Transformasi visual website lama agar responsif, cepat, & estetik tinggi.', basePrice: 250000, addedDays: 4, category: 'feature', allowedPlatforms: ['konsultasi-redesign'] },
  { id: 'db-migration', name: 'Restrukturisasi & Imigrasi Database', description: 'Migrasi data dari Excel / DBMS lama ke skema Cloud SQL / modern database.', basePrice: 300000, addedDays: 3, category: 'feature', allowedPlatforms: ['konsultasi-redesign'] },
  { id: 'seo-optimization', name: 'Optimasi SEO & Core Web Vitals', description: 'Peningkatan performa kecepatan akses Google Lighthouse & index SEO organik.', basePrice: 120000, addedDays: 2, category: 'feature', allowedPlatforms: ['konsultasi-redesign'] },

  // Features specifically for "Pengembangan Software Web"
  { id: 'payment-gateway', name: 'Integrasi Payment Gateway', description: 'Sistem transfer otomatis, e-wallet, credit card, VA (Midtrans/Xendit).', basePrice: 350000, addedDays: 3, category: 'feature', allowedPlatforms: ['web-dev', 'android-dev', 'custom-dev'] },
  { id: 'auth-web', name: 'Multi-role User Authentication', description: 'Sistem login email/Google, hak akses bertingkat admin, manajer & staff.', basePrice: 150000, addedDays: 2, category: 'feature', allowedPlatforms: ['web-dev', 'custom-dev'] },
  { id: 'excel-pdf-export', name: 'Cetak Laporan PDF & Auto-Export Excel', description: 'Pembuatan invoice digital otomatis dan rekap data operasional.', basePrice: 180000, addedDays: 2, category: 'feature', allowedPlatforms: ['web-dev', 'custom-dev'] },
  { id: 'chat-live-web', name: 'Live Chat Support & WhatsApp Chatbot', description: 'Tombol interaktif customer service bertenaga chatbot responsive.', basePrice: 200000, addedDays: 3, category: 'feature', allowedPlatforms: ['web-dev', 'custom-dev'] },
  { id: 'smart-gemini-web', name: 'Asisten Pintar AI (Gemini API)', description: 'Analisis laporan penjualan otomatis & rangkuman teks berbasis AI.', basePrice: 400000, addedDays: 4, category: 'feature', allowedPlatforms: ['web-dev', 'android-dev', 'custom-dev'] },
  { id: 'api-third-party', name: 'Koneksi API Eksternal (Kurir & Marketplace)', description: 'Sinkronisasi resi pengiriman otomatis (RajaOngkir) atau stok produk.', basePrice: 280000, addedDays: 3, category: 'feature', allowedPlatforms: ['web-dev', 'android-dev', 'custom-dev'] },

  // Features specifically for "Aplikasi Android"
  { id: 'push-notifications', name: 'Push Notifications Firebase FCM', description: 'Kirim pengumuman, broadcast promosi & notifikasi harian langsung ke device.', basePrice: 165000, addedDays: 3, category: 'feature', allowedPlatforms: ['android-dev', 'custom-dev'] },
  { id: 'offline-sync', name: 'Optimasi Offline Cache Database', description: 'Teknologi caching data SQLite agar aplikasi tetap handal walau tanpa internet.', basePrice: 220000, addedDays: 4, category: 'feature', allowedPlatforms: ['android-dev', 'custom-dev'] },
  { id: 'gps-tracking', name: 'Google Maps API & GPS Tracker', description: 'Pelacakan real-time koordinat kurir/sales & rute maps interaktif.', basePrice: 380000, addedDays: 4, category: 'feature', allowedPlatforms: ['android-dev', 'custom-dev'] },
  { id: 'camera-scanner', name: 'Integrasi Kamera & Scanner Barcode/QR', description: 'Input data otomatis lewat kamera serta scan barcode barang digudang.', basePrice: 200000, addedDays: 3, category: 'feature', allowedPlatforms: ['android-dev', 'custom-dev'] },
  { id: 'whatsapp-otp', name: 'Verifikasi Nomor OTP WhatsApp', description: 'Keamanan ekstra mencegah akun palsu dengan verifikasi nomor WhatsApp instant.', basePrice: 240000, addedDays: 2, category: 'feature', allowedPlatforms: ['android-dev'] },

  // Features specifically for "Custom Bisnis Website / Aplikasi"
  { id: 'erp-integration', name: 'Sinkronisasi Sistem ERP & Inventory', description: 'Integrasi real-time stok gudang, purchasing, order tracking, dan data pusat.', basePrice: 600000, addedDays: 6, category: 'feature', allowedPlatforms: ['custom-dev'] },
  { id: 'multi-branch', name: 'Modul Multi-Cabang / Multi-Gudang', description: 'Manajemen terpusat untuk bisnis dengan banyak outlet, gudang, atau divisi operasional.', basePrice: 450000, addedDays: 5, category: 'feature', allowedPlatforms: ['custom-dev'] },
  { id: 'audit-log', name: 'Enterprise Activity Log & Security Audit', description: 'Pencatatan riwayat aktivitas user yang sangat ketat untuk kebutuhan audit kepatuhan.', basePrice: 200000, addedDays: 3, category: 'feature', allowedPlatforms: ['custom-dev'] },
  
  // Tiers / Speed
  { id: 'standard-sla', name: 'Standard SLA Support & Setup', description: 'Waktu respon support standard, backup mingguan gratis.', basePrice: 0, addedDays: 0, category: 'tier' },
  { id: 'express-sla', name: 'Priority Express SLA (< 15 Menit)', description: 'Prioritas deployment secepat kilat + technical support standby.', basePrice: 250000, addedDays: -3, category: 'tier' },
];