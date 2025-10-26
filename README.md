# 2026 YKS Kapsamlı Rehberi

2026 YKS'ye hazırlanan öğrenciler için kapsamlı, interaktif ve kullanıcı dostu bir web uygulaması.

## 🎯 Özellikler

### 📱 Progressive Web App (PWA)
- Offline çalışma desteği
- Mobil cihazlara yüklenebilir
- Hızlı yükleme ve performans
- Push notification desteği

### 📊 Kapsamlı İçerik
- **Sınav Takvimi**: 2026 YKS tarihleri ve kritik günler
- **Sınav Yapısı**: TYT, AYT, YDT detaylı açıklamaları
- **Alan Seçimi**: SAY, SÖZ, EA, DİL puan türleri
- **Konu Dağılımı**: Detaylı konu ve soru dağılımları
- **Puan Hesaplama**: İnteraktif puan hesaplama simülasyonları
- **Başvuru Süreci**: Adım adım başvuru rehberi
- **SSS**: Sıkça sorulan sorular
- **Stratejiler**: Altın değerinde hazırlık stratejileri

### ⏰ Canlı Özellikler
- Gerçek zamanlı countdown timer (2026 TYT'ye kalan süre)
- İnteraktif FAQ sistemi
- Puan hesaplama simülatörleri (EA ve SAY örnekleri)
- Smooth scrolling navigasyon

### 🎨 Modern Tasarım
- Responsive tasarım (mobil, tablet, masaüstü)
- Dark mode desteği
- Accessibility uyumlu (WCAG 2.1 AA)
- Modern UI/UX prensipleri
- Inter font ile profesyonel tipografi

## 🚀 Kurulum ve Kullanım

### Yerel Geliştirme
```bash
# Projeyi klonlayın
git clone https://github.com/newmekintos/yks-2026-rehberi.git
cd yks-2026-rehberi

# Basit HTTP sunucusu başlatın
python -m http.server 8000
# veya
npx serve .
# veya
php -S localhost:8000
```

### Canlı Site
Proje şu anda GitHub Pages'de canlı: `https://newmekintos.github.io/yks-2026-rehberi/`

## 📁 Proje Yapısı

```
yks-2026-rehberi/
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri
├── script.js           # JavaScript fonksiyonları
├── manifest.json       # PWA manifest dosyası
├── sw.js              # Service Worker
├── icons/             # PWA icon dosyaları
├── screenshots/       # PWA screenshot dosyaları
└── README.md          # Bu dosya
```

## 🔧 Teknik Detaylar

### Kullanılan Teknolojiler
- **HTML5**: Semantic markup ve accessibility
- **CSS3**: Modern styling, Grid, Flexbox, Custom Properties
- **Vanilla JavaScript**: Framework-free, performant
- **PWA**: Service Worker, Web App Manifest
- **Responsive Design**: Mobile-first approach

### Browser Desteği
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Performance
- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 📱 PWA Özellikleri

### Offline Desteği
- Service Worker ile cache stratejileri
- Network-first, Cache-first, Stale-while-revalidate
- Offline fallback sayfaları

### Install Prompt
- "Ana ekrana ekle" özelliği
- App-like deneyim
- Splash screen ve icon desteği

### Background Sync
- Offline veri senkronizasyonu
- Push notification desteği
- Background task handling

## 🎨 Tasarım Sistemi

### Renk Paleti
- Primary: #2563eb (Mavi)
- Secondary: #64748b (Gri)
- Accent: #f59e0b (Turuncu)
- Success: #10b981 (Yeşil)
- Warning: #f59e0b (Sarı)
- Error: #ef4444 (Kırmızı)

### Typography
- Font Family: Inter, system fonts
- Headings: 700 weight
- Body: 400 weight
- Small text: 300 weight

### Spacing
- Base unit: 8px
- Scale: 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem

## 🔍 SEO ve Accessibility

### SEO Optimizasyonu
- Semantic HTML5 markup
- Meta tags ve Open Graph
- Structured data
- Sitemap ready

### Accessibility
- WCAG 2.1 AA uyumlu
- Keyboard navigation
- Screen reader friendly
- High contrast mode desteği
- Focus management

## 📊 Analytics ve Monitoring

### Performance Monitoring
- Core Web Vitals tracking
- User interaction analytics
- Error logging
- Performance metrics

### User Experience
- Scroll depth tracking
- Click heatmaps
- Form interaction tracking
- Page load times

## 🚀 Deployment

### Static Hosting
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

### CDN
- Cloudflare
- AWS CloudFront
- Google Cloud CDN

## 🔄 Güncellemeler

### Version Control
- Semantic versioning
- Changelog maintenance
- Feature flags
- A/B testing ready

### Content Updates
- ÖSYM güncellemeleri için hazır yapı
- Tarih güncellemeleri
- Konu dağılımı güncellemeleri
- Yeni özellik ekleme

## 🤝 Katkıda Bulunma

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 📞 İletişim

- Proje Sahibi: newmekintos
- GitHub: [newmekintos](https://github.com/newmekintos)
- Website: [GitHub Pages](https://newmekintos.github.io/yks-2026-rehberi/)

## 🙏 Teşekkürler

- ÖSYM - Resmi sınav bilgileri için
- Inter Font - Typography için
- Modern CSS - Styling teknikleri için
- PWA Community - Progressive Web App rehberleri için

---

**Önemli Not**: Bu site bilgilendirme amaçlıdır. Resmi bilgiler için [ÖSYM](https://www.osym.gov.tr) web sitesini ziyaret ediniz.

## 🎯 Hedef Kitle

- 2026 YKS'ye girecek 12. sınıf öğrencileri
- Mezunlar (yeniden hazırlananlar)
- Bu öğrencilerin velileri

## 📈 Öne Çıkan Özellikler

1. **Gerçek Zamanlı Countdown**: Sınava kalan süreyi canlı olarak gösterir
2. **İnteraktif Puan Hesaplama**: EA ve SAY puan türleri için simülasyon
3. **Kapsamlı Konu Dağılımı**: TYT, AYT, YDT için detaylı tablolar
4. **Mobil Uyumlu**: Tüm cihazlarda mükemmel görünüm
5. **Offline Çalışma**: İnternet bağlantısı olmadan da kullanılabilir
6. **PWA Desteği**: Ana ekrana eklenebilir, app gibi çalışır

Bu web sitesi, 2026 YKS'ye hazırlanan öğrenciler için **tek kaynak** olarak tasarlanmış ve tüm ihtiyaçlarını karşılayacak şekilde geliştirilmiştir. ÖSYM'nin resmi diline yakın ancak çok daha anlaşılır ve öğrenci dostu bir ton kullanılmıştır.
