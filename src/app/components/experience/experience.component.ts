import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      period: '2021 - Günümüz',
      location: 'İstanbul',
      description: 'Kurumsal müşteriler için web uygulamaları geliştirme',
      responsibilities: [
        'Mikroservis mimarisi tasarımı ve implementasyonu',
        'Agile takım liderliği ve mentorluk',
        'Cloud altyapı yönetimi (AWS)',
        'CI/CD süreçlerinin oluşturulması'
      ]
    },
    {
      company: 'Digital Innovations',
      position: 'Full Stack Developer',
      period: '2019 - 2021',
      location: 'İzmir',
      description: 'E-ticaret ve fintech projeleri geliştirme',
      responsibilities: [
        'React ve Node.js ile modern web uygulamaları geliştirme',
        'REST API tasarımı ve implementasyonu',
        'Performance optimizasyonu',
        'Third-party API entegrasyonları'
      ]
    },
    {
      company: 'StartupLab',
      position: 'Frontend Developer',
      period: '2018 - 2019',
      location: 'Ankara',
      description: 'Startup projeleri için web arayüzleri geliştirme',
      responsibilities: [
        'React ile kullanıcı arayüzleri geliştirme',
        'UI/UX tasarım süreçlerine katılım',
        'Mobile-first yaklaşımı ile responsive tasarım',
        'State management (Redux) implementasyonu'
      ]
    }
  ];
}