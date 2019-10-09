import { Component, Input } from '@angular/core';
import { Slide } from './carousel.interface';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  query,
  useAnimation,
    animation, 

} from '@angular/animations';

import { AnimationType, scaleIn, scaleOut, fadeIn, fadeOut, flipIn, flipOut, jackIn, jackOut } from './carousel.animations';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],

  animations: [
    trigger('slideAnimation', [  
      /* scale */
      transition('void => scale', [useAnimation(scaleIn)]),
      transition('scale => void', [useAnimation(scaleOut)]),

      /* fade */
      transition('void => fade', [useAnimation(fadeIn)]),
      transition('fade => void', [useAnimation(fadeOut)]),

      /* flip */
      transition('void => flip', [useAnimation(flipIn)]),
      transition('flip => void', [useAnimation(flipOut)]),

      /* JackInTheBox */
      transition('void => jackInTheBox', [useAnimation(jackIn)]),
      transition('jackInTheBox => void', [useAnimation(jackOut)]),
    ])   
  ]
})

// transition(':enter', [
//         style({ opacity: 0 , transform: 'scale(0.5)'}),
//         animate('500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)', style({ opacity: 1, transform: 'scale(1)' }))
//       ]),

// create different enter and different leave effects
// make the user choose between the enter and leave, maby also no effect

// slide effect -> https://onehungrymind.com/angular-animations-intro/
// animations -> https://codepen.io/jh3y/pen/WwVKLN
// inspiration -> https://tympanus.net/codrops/2019/08/20/react-slider-with-parallax-hover-effects/

export class CarouselComponent {

  @Input() slides: Slide[];
  @Input() animationType = AnimationType.Scale;

  currentSlide = 0;

  constructor() { }

  onPreviousClick() {
    const previous = this.currentSlide - 1
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log('previous clicked, new current slide is: ', this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log('next clicked, new current slide is: ', this.currentSlide);
  } 

}