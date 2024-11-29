import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactInfo = {
    phone: '+90 552 443 95 16',
    whatsapp: '+905524439516',
    email: 'umityasarturk@gmail.com',
    address: 'İstanbul/Beşiktaş'
  };

  constructor(public translationService: TranslationService) {}
}