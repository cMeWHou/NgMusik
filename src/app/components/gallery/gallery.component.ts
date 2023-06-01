import {Component} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  public shots =
    [
      {img: 'assets/images/insta_1.png', likes: 28, comms: 4},
      {img: 'assets/images/insta_2.png', likes: 19, comms: 12},
      {img: 'assets/images/insta_3.png', likes: 18, comms: 7},
      {img: 'assets/images/insta_4.png', likes: 24, comms: 11},
      {img: 'assets/images/insta_5.png', likes: 44, comms: 31}
    ]
  public backImage = 'back-shot-img'

  public RotateSet(direction: number) {
    this.scroll[direction === 0 ? 0 : 1]();
  }

  public SetLike(index: number) {
    this.shots[index].likes++;
  }

  public scroll = [() => {
    let tmp = this.shots[this.shots.length - 1]
    for (let i = this.shots.length - 1; i > 0; i--) {
      this.shots[i] = this.shots[i - 1]
    }
    this.shots[0] = tmp
  }, () => {
    let tmp = this.shots[0]
    for (let i = 0; i < this.shots.length - 1; i++) {
      this.shots[i] = this.shots[i + 1]
    }
    this.shots[this.shots.length - 1] = tmp
  }]
}
