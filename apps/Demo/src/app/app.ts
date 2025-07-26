import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// importing the component from the library
import { Hero } from '@acme/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Hero],
  template: `
    <lib-hero 
      (ctaClick)="handleClick()"
      title="Welcmoe demo"
      subtitle="Build something amazing today"
      cta="Get Started"
    ></lib-hero>
  `,
})
export class App {
  public handleClick(): void {
    console.log("clicked");
  }
}