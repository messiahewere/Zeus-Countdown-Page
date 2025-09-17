import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';
import { SlideMenu } from './slide-menu/slide-menu';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Main, Footer, SlideMenu, 
            MatSelectModule, MatFormFieldModule, 
            CommonModule, Counter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('landing-page');
  isOpen: boolean = false;
  showButton = false;

  isNotPresentation: boolean = false;
  
  private lastScrollTop = 0;
  private upwardScrollCount = 0;


  private scrollTimeout: any;


  onFormSubmit(isOpenEvent: boolean) {
    this.isOpen = isOpenEvent;
  }

  // Listen to scroll events on window
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    
    this.scrollTimeout = setTimeout(() => {
      const currentScroll = window.scrollY || window.pageYOffset;

      // Detect scroll direction
      if (currentScroll < this.lastScrollTop) {
        // User scrolled up
        this.upwardScrollCount++;
      } else {
        // User scrolled down → reset upward count
        this.upwardScrollCount = 0;
      }

      // Show button only after threshold (simplified for testing)
      this.showButton = currentScroll > 100;

      this.lastScrollTop = currentScroll;
    }, 10);
  }

  scrollToTop() {
    
    // Force immediate scroll to top
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
    
    // Also try smooth scroll
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 10);
  }
}
