import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: BehaviorSubject<Theme>;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    let defaultTheme: Theme = 'light';

    if (this.isBrowser) {
      const savedTheme = localStorage.getItem('theme') as Theme;
      defaultTheme = savedTheme || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    
    this.currentTheme = new BehaviorSubject<Theme>(defaultTheme);
    this.setTheme(defaultTheme);
  }

  getCurrentTheme() {
    return this.currentTheme.asObservable();
  }

  setTheme(theme: Theme) {
    this.currentTheme.next(theme);
    if (this.isBrowser) {
      localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  }

  toggleTheme() {
    const newTheme = this.currentTheme.value === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
}