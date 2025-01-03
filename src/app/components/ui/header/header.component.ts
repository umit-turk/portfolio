import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Language } from '../../../enums/language.enum';
import { TranslationService } from '../../../services/translation.service';
import { ThemeService, Theme } from '../../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  currentLang: Language = Language.TR;
  currentTheme: Theme = 'light';
  Language = Language;

  constructor(
    public translationService: TranslationService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.translationService.getCurrentLang().subscribe(lang => {
      this.currentLang = lang;
    });
    
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (this.isMenuOpen && menuToggle && nav) {
      const isClickInsideMenu = nav.contains(event.target as Node);
      const isClickOnToggle = menuToggle.contains(event.target as Node);
      
      if (!isClickInsideMenu && !isClickOnToggle) {
        this.isMenuOpen = false;
      }
    }
  }

  toggleMenu(event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleLanguage() {
    const newLang = this.currentLang === Language.TR ? Language.EN : Language.TR;
    this.translationService.setLanguage(newLang);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}