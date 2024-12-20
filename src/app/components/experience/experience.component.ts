import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { Experience } from '../../interfaces/experience.interface';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  constructor(
    public translationService: TranslationService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  experiences: Experience[] = [
    {
      company: 'Yetiş+ Çarşı',
      position: 'Full Stack Javascript Developer',
      period: '2024 - 2025',
      location: 'İstanbul, Türkiye',
      description: {
        tr: 'E-ticaret platformu geliştirme ve yönetimi',
        en: 'E-commerce platform development and management'
      },
      responsibilities: {
        tr: [
          'Frontend ve backend geliştirme süreçlerinde aktif rol alma',
          'Kullanıcı dostu ve responsive tasarımlar oluşturma',
          'E-ticaret platformunun server-side geliştirmesi',
          'Performans optimizasyonu ve SEO iyileştirmeleri',
          'Modern e-ticaret çözümleri geliştirme'
        ],
        en: [
          'Taking active role in frontend and backend development processes',
          'Creating user-friendly and responsive designs',
          'Server-side development of e-commerce platform',
          'Performance optimization and SEO improvements',
          'Developing modern e-commerce solutions'
        ]
      }
    },
    {
      company: 'Alphastellar',
      position: 'Frontend / React Native Developer',
      period: '2022 - 2024',
      location: 'Bursa, Türkiye',
      description: {
        tr: 'Sigorta ve özel jet taşımacılığı dahil kurumsal web ve mobil çözümler',
        en: 'Corporate web and mobile solutions including insurance and private jet transportation'
      },
      responsibilities: {
        tr: [
          'React Native ile mobil uygulama geliştirme ve takım liderliği',
          'Frontend projelerde hata çözümü ve yeni özellik geliştirme',
          'Angular konusunda takım mentorlüğü',
          'Kod kalitesi ve best practice standartlarını belirleme',
          'Cross-platform uygulama geliştirme'
        ],
        en: [
          'Mobile app development with React Native and team leadership',
          'Bug fixing and new feature development in frontend projects',
          'Team mentorship in Angular',
          'Establishing code quality and best practice standards',
          'Cross-platform application development'
        ]
      }
    },
    {
      company: 'Arti İki Web Solutions',
      position: 'Frontend / React Native Developer',
      period: '2021 - 2022',
      location: 'Bursa, Türkiye',
      description: {
        tr: 'Kurumsal web, CRM ve mobil uygulama çözümleri',
        en: 'Corporate web, CRM and mobile application solutions'
      },
      responsibilities: {
        tr: [
          'Figma tasarımlarının pixel-perfect implementasyonu',
          'Vanilla JavaScript ve CSS ile özel çözümler geliştirme',
          'React Native ile mobil uygulama geliştirme ve bakımı',
          'Legacy projelerin modernizasyonu ve hata düzeltmeleri',
          'Responsive ve cross-browser uyumlu arayüzler geliştirme'
        ],
        en: [
          'Pixel-perfect implementation of Figma designs',
          'Developing custom solutions with Vanilla JavaScript and CSS',
          'Mobile app development and maintenance with React Native',
          'Modernization of legacy projects and bug fixes',
          'Developing responsive and cross-browser compatible interfaces'
        ]
      }
    }
  ];

  ngOnInit() {
    // mevcut kodlar...
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimation();
    }
  }

  private initScrollAnimation() {
    const timeline = document.querySelector('.timeline');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          timeline?.classList.add('animate-line');
          timelineItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate');
            }, 500 + (index * 300));
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (timeline) {
      observer.observe(timeline);
    }
  }
}