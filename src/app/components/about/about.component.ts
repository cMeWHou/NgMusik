import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public aboutMusicImages: string[] = [
    'assets/images/about_music_back.png',
    'assets/images/about_music_front.png'
  ];

  public apiUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  public xhrResponse: string = '';
  public fetchResponse: string = '';

  public firstPokemon: string = '';
  public secondPokemon: string = '';

  constructor() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', this.apiUrl + 'ditto/');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.responseType = 'json';
    xhr.onload = () => {
      this.xhrResponse = xhr.response.sprites.front_default;
    };
    xhr.send()

    fetch(this.apiUrl + 'metapod/')
      .then(response => response.json())
      .then(data => {
        this.fetchResponse = data.sprites.front_default;
      });

    this.firstPokemon = this.aboutMusicImages[0];
    this.secondPokemon = this.aboutMusicImages[1];
  }

  public firstStyles: string = 'opacity: 1; transform: rotateZ(0deg)';
  public secondStyles: string = 'opacity: 1; transform: rotateZ(0deg)';

  private timer: any;

  protected onMouseEnter() {
    this.firstStyles = 'opacity: 0.1';
    this.secondStyles = 'opacity: 0.1';

    setTimeout(() => {
      this.firstPokemon = this.xhrResponse;
      this.secondPokemon = this.fetchResponse;

      this.firstStyles = 'opacity: 1';
      this.secondStyles = 'opacity: 1';
    }, 500);

    this.timer = setInterval(() => {
      this.firstStyles = 'transform: rotateZ(360deg) scale(100%)';
      this.secondStyles = 'transform: rotateZ(-360deg) scale(50%)';

      setTimeout(() => {
        this.firstStyles = 'transform: rotateZ(0deg) scale(50%)';
        this.secondStyles = 'transform: rotateZ(0deg) scale(100%)';
      }, 250);
    }, 500);
  };

  protected onMouseLeave() {
    this.firstStyles = 'opacity: 0.1; transform: rotateZ(0deg)';
    this.secondStyles = 'opacity: 0.1; transform: rotateZ(0deg)';

    setTimeout(() => {
      this.firstStyles = 'transform: rotateZ(0deg) scale(100%)'
      this.secondStyles = 'transform: rotateZ(0deg) scale(100%)'

      this.firstPokemon = this.aboutMusicImages[0];
      this.secondPokemon = this.aboutMusicImages[1];

      this.firstStyles = 'opacity: 1';
      this.secondStyles = 'opacity: 1';
    }, 500)

    clearInterval(this.timer);
  };
}
