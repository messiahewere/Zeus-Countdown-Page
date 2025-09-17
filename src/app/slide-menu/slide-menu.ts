import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-menu',
  imports: [CommonModule],
  templateUrl: './slide-menu.html',
  styleUrl: './slide-menu.scss'
})
export class SlideMenu {

  
  isLangChanged: boolean = false;
  isNewsOpen: boolean = false;
  isYouAreOpen: boolean = false;
  isFeaturesOpen: boolean = false;

   onSeeNews() {
    this.isNewsOpen = !this.isNewsOpen;
  }

  onLangChange() {
    this.isLangChanged = !this.isLangChanged;
  }

  onSeeYouAre() {
    this.isYouAreOpen = !this.isYouAreOpen;
  }

  onSeeFeatures() {
    this.isFeaturesOpen = !this.isFeaturesOpen;
  }
}
