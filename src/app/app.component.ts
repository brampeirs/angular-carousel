import { Component, ViewChild } from '@angular/core';
import { Slide } from './carousel/carousel.interface';
import { AnimationType } from './carousel/carousel.animations';
import { CarouselComponent } from './carousel/carousel.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
    @ViewChild(CarouselComponent) carousel: CarouselComponent;

  animationType = AnimationType.Scale;

  animationTypes = [
    {
      name: 'Scale',
      value: AnimationType.Scale
    },
    {
      name: 'Fade',
      value: AnimationType.Fade
    },
    {
      name: 'Flip',
      value: AnimationType.Flip
    },
    {
      name: 'Jack In The Box',
      value: AnimationType.JackInTheBox
    }
  ]
  slides: Slide[] = 
    [
      {
        headline: 'Miouw',
        src: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2901&q=80'
      },
      {
        headline: 'In The Wilderness',
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
      },
      {
        headline: 'For Your Current Mood',
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
      },
      {
        headline: 'Focus On The Writing',
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
      }
    ]

  setAnimationType(type) {
    this.animationType = type.value;
    setTimeout(() => {
        this.carousel.onNextClick();
    })         
  }
}

