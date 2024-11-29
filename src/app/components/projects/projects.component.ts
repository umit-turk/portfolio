import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(public translationService: TranslationService) {}

  projects = [
    {
      title: 'E-Ticaret Platformu',
      description: 'Modern ve kullanıcı dostu e-ticaret platformu. Gelişmiş ürün filtreleme, sepet yönetimi ve ödeme sistemi entegrasyonu.',
      image: 'assets/projects/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Sosyal Medya Uygulaması',
      description: 'Gerçek zamanlı mesajlaşma ve paylaşım özellikleri olan sosyal platform. Socket.io ile anlık bildirimler.',
      image: 'assets/projects/social.jpg',
      technologies: ['Angular', 'Firebase', 'Socket.io', 'TypeScript'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Task Yönetim Sistemi',
      description: 'Ekip çalışması için geliştirilmiş proje ve görev yönetim uygulaması. Drag & Drop özellikli board sistemi.',
      image: 'assets/projects/task.jpg',
      technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Mobil Fitness Uygulaması',
      description: 'Kişiselleştirilmiş egzersiz programları ve beslenme takibi yapabilen mobil uygulama.',
      image: 'assets/projects/fitness.jpg',
      technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Blog Platform',
      description: 'SEO odaklı, yüksek performanslı blog platformu. Markdown editör ve otomatik resim optimizasyonu.',
      image: 'assets/projects/blog.jpg',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];
}