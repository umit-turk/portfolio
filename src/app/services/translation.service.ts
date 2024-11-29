import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tr } from '../translations/tr';
import { en } from '../translations/en';
import { Language } from '../enums/language.enum';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations = {
    [Language.TR]: tr,
    [Language.EN]: en
  };

  public currentLang: BehaviorSubject<Language>;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    let defaultLang: Language;

    if (this.isBrowser) {
      const browserLang = navigator.language.toLowerCase().split('-')[0];
      defaultLang = browserLang === 'tr' ? Language.TR : Language.EN;
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang && Object.values(Language).includes(savedLang)) {
        defaultLang = savedLang;
      }
    } else {
      defaultLang = Language.TR;
    }

    this.currentLang = new BehaviorSubject<Language>(defaultLang);
  }

  getCurrentLang() {
    return this.currentLang.asObservable();
  }

  setLanguage(lang: Language) {
    if (Object.values(Language).includes(lang)) {
      this.currentLang.next(lang);
      if (this.isBrowser) {
        localStorage.setItem('language', lang);
        document.documentElement.setAttribute('lang', lang);
      }
    }
  }

  translate(key: string): string {
    try {
      const keys = key.split('.');
      let translation = this.translations[this.currentLang.value];
      
      for (const k of keys) {
        if (!translation || !translation.hasOwnProperty(k)) {
          return key;
        }
        translation = translation[k as keyof typeof translation] as any;
      }

      return typeof translation === 'string' ? translation : key;
    } catch (error) {
      return key;
    }
  }
}