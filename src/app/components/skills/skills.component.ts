import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  constructor(public translationService: TranslationService) {}
  
  skills = [
    { name: 'JavaScript', logo: 'assets/logos/javascript.svg' },
    { name: 'TypeScript', logo: 'assets/logos/typescript.svg' },
    { name: 'React.js', logo: 'assets/logos/react.svg' },
    { name: 'React Native', logo: 'assets/logos/react-native.svg' },
    { name: 'Angular', logo: 'assets/logos/angular.svg' },
    { name: 'Node.js', logo: 'assets/logos/nodejs.svg' },
    { name: 'Prisma', logo: 'assets/logos/prisma.svg' },
    { name: 'HTML', logo: 'assets/logos/html5.svg' },
    { name: 'CSS', logo: 'assets/logos/css3.svg' },
    { name: 'Tailwind CSS', logo: 'assets/logos/tailwind.svg' },
    { name: 'Bootstrap', logo: 'assets/logos/bootstrap.svg' }
  ];
}