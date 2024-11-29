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
      title: 'Hypercompany',
      description: {
        tr: 'Modern ve kullanıcı dostu web uygulamaları ve mobil uygulamalar geliştirmek için bir şirket.',
        en: 'A company for developing modern and user-friendly web applications and mobile apps.'
      },
      image: 'assets/projects/hypercompany.png',
      technologies: ['Angular', 'Rxjs', 'Ngrx', 'Bootstrap'],
      demo: 'https://www.hypercompany.com'
    },
    {
      title: 'Jetzen',
      description: {
        tr: 'Özel jet taşımacılığı hizmeti sunan bir platform.',
        en: 'A platform providing private jet transportation services.'
      },
      image: 'assets/projects/jetzen.png',
      technologies: ['Angular', 'Rxjs', 'Ngrx', 'Bootstrap'],
      demo: 'https://www.flyjetzen.com'
    },
    {
      title: 'Vault Insurance',
      description: {
        tr: 'Amerika Birleşik Devletlerinin tüm eyaletlerini kapsayan çok gelişmiş bir sigorta yönetim paneli. Tüm sigorta işlemlerini çok kısa bir sürede gerçekleştirebilir veya var olan sigortanızı çok kolay bir şekilde yönetebilirsiniz.',
        en: 'An advanced insurance management panel covering all states in the United States. You can perform all insurance transactions in a very short time or easily manage your existing insurance.'
      },
      image: 'assets/projects/vault.png',
      technologies: ['Angular', 'Rxjs', 'Ngrx', 'Bootstrap'],
      demo: 'https://www.vaultinsurance.com'
    },
    {
      title: 'Magnet Modeli',
      description: {
        tr: 'Şirketinizin eksiklerini görmek için veya daha iyi hale getirmek için kullanabileceğiniz bir endeks modeli sunar.',
        en: 'Provides an index model that you can use to see your company\'s deficiencies or to improve it.'
      },
      image: 'assets/projects/magnetmodeli.png',
      technologies: ['Next.js', 'Redux', 'Node.js', 'Mysql', 'Express'],
      demo: 'https://magnetmodeli.com'
    },
    {
      title: 'Yapısoft',
      description: {
        tr: 'İnşaat şirketleri için uçtan uca bir yönetim platformu.',
        en: 'An end-to-end management platform for construction companies.'
      },
      image: 'assets/projects/yapısoft.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      demo: 'https://yapisoft.com'
    },
    {
      title: 'Milyonada',
      description: {
        tr: 'Kullanıcılar, iş bulabilir veya kendi iş ilanını oluşturabilirler.',
        en: 'Users can find jobs or create their own job listings.'
      },
      image: 'assets/projects/milyonada.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React Native'],
      demo: 'https://milyonada.com'
    },
    {
      title: 'Living Price',
      description: {
        tr: 'Bu uygulama kullanıcılara merak ettikleri herhangi bir şehir için ortalama maliyet özeti sunar. Kullanıcılar, şehir seçerek barınma, yemek, ulaşım ve diğer yaşam giderleri gibi harcamalara ilişkin genel bilgilere ulaşabiliyor.',
        en: 'This application provides users with an average cost summary for any city they are curious about. Users can access general information about expenses such as housing, food, transportation, and other living expenses by selecting a city.'
      },
      image: 'assets/projects/livingprice.png',
      technologies: ['React Native', 'Redux', 'Play Store'],
      demo: 'https://play.google.com/store/apps/details?id=com.livingprice'
    },
    {
      title: 'QR Scanner',
      description: {
        tr: 'Bir QR kod tarayıcı uygulaması mı arıyorsunuz? Bu Ücretsiz QR Tarayıcıyı deneyin - QR Kod Okuyucu, tüm QR ve barkod formatlarını destekleyen Barkod Tarayıcı! Tüm Android cihazlar için sahip olunması gereken bir barkod okuyucudur.',
        en: 'Looking for a QR code scanner app? Try this Free QR Scanner - QR Code Reader, a Barcode Scanner that supports all QR and barcode formats! A must-have barcode reader for all Android devices.'
      },
      image: 'assets/projects/qrscanner.png',
      technologies: ['React Native', 'Redux', 'Play Store'],
      demo: 'https://play.google.com/store/apps/details?id=com.noshery'
    },
    {
      title: 'Yetis Plus',
      description: {
        tr: 'Yetis Plus, bir e-ticaret platformudur. Kullanıcılar, ürünleri keşfedebilir, sepete ekleyebilir ve ödeme yapabilirler.',
        en: 'Yetis Plus is an e-commerce platform. Users can discover products, add them to cart and make payments.'
      },
      image: 'assets/projects/yetisplus.png',
      technologies: ['Next.js', 'Redux', 'Node.js', 'PostgreSQL', 'Prisma', 'Express'],
      demo: 'https://yetisplus.com/'
    }
  ];

  openDemo(url: string): void {
    window.open(url, '_blank', 'noopener');
  }
}