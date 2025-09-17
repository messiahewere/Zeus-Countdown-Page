import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Output() formSubmitted = new EventEmitter<boolean>();
  isOpen: boolean = false;

   onCloseOpen() {
  this.isOpen = !this.isOpen;
  this.formSubmitted.emit(this.isOpen);
  }

}
