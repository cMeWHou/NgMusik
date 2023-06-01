import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Output()
  public openModal = new EventEmitter<void>();

  public day : string | number = '';
  public hour : string | number = '';
  public minute : string | number = '';
  public second : string | number = '';

  public concertDateString : string = '2023-05-14T21:30:00';
  public concertDate : Date = new Date(this.concertDateString);

  public timer : any;
  public timer_timerId = setInterval(() => {
    if (this.concertDate.getTime() - new Date().getTime() <= 0) {
      clearInterval(this.timer)
    }

    const diffTime = this.concertDate.getTime() - new Date().getTime()
    const currentDate = new Date(diffTime)

    const day = currentDate.getDay()
    const hour = currentDate.getHours()
    const minute = currentDate.getMinutes()
    const second = currentDate.getSeconds()

    this.day = day < 10 ? '0' + day : day
    this.hour = hour < 10 ? '0' + hour : hour
    this.minute = minute < 10 ? '0' + minute : minute
    this.second = second < 10 ? '0' + second : second
  }, 1000)

  public onOpenModal = () => {
    this.openModal.emit();
  }
}
