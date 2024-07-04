import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  genders = ['MALE', 'FEMALE'];

  model = new Hero('', '', this.genders[0], '');

  submitted = false;

  constructor(private heroService: HeroService) {}

  onSubmit() {
    this.submitted = true;
    this.heroService.addHero(this.model).subscribe((response: any) => {
      console.log('Hero added:', response);
    }, (error: any) => {
      console.error('Error adding hero:', error);
    });
  }


  newHero() {
    this.model = new Hero('', '', this.genders[0], '');
  }

  skyDog(): Hero {
    const myHero = new Hero('', '', this.genders[0], '');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

  /////////////////////////////
}
