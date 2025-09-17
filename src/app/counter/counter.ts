import { Component, OnDestroy, OnInit, ChangeDetectorRef} from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../Service/counter-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter implements OnInit, OnDestroy {
  constructor(private counterService: CounterService, private cdr: ChangeDetectorRef) {

  }

  targetTime!: Date;
  timeLeft = 0;
  intervalId: any;
  private subscription?: Subscription;


  ngOnInit() {
    const savedTarget = localStorage.getItem('countdownTarget')

    if (savedTarget) {
      this.targetTime = new Date(savedTarget);
      this.startCountDown(this.targetTime);

    } else {
      this.subscription = this.counterService.getInternetTime().subscribe((internetTime: Date) => {
      this.targetTime = new Date(internetTime.getTime() + 19 * 24 * 60 * 60 * 1000);
      localStorage.setItem('countdownTarget', this.targetTime.toISOString());
      this.startCountDown(internetTime);
    });
    }

    
  }

  startCountDown(internetTime: Date) {
    this.updateTimeLeft(internetTime);

    this.intervalId = setInterval(() => {
      const now = new Date();
      this.updateTimeLeft(now)
    }, 1000);

  }

  updateTimeLeft(now: Date) {
    this.timeLeft = Number(this.targetTime.getTime() - now.getTime());
    if (this.timeLeft < 0) {
      clearInterval(this.intervalId);
      this.timeLeft = 0;
      localStorage.removeItem('countdownTarget')
    }
    this.cdr.detectChanges();
  }

   get days() {
    return Math.floor(this.timeLeft / (1000 * 60 * 60 * 24));
  }

  get hours() {
    return Math.floor((this.timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }

  get minutes() {
    return Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  }

  get seconds() {
    return Math.floor((this.timeLeft % (1000 * 60)) / 1000);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

