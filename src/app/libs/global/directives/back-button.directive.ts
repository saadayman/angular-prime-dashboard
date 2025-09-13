// this is a global directive that will be used to navigate back to the previous page
import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[appBackButton]',
  standalone: true,
  providers: [Location],
})
export class BackButtonDirective {
  // this can be extended to navigate back to the previous page or to the home page or any place we chose to , i build something like that in one of my projects this is the starter idea
  constructor(private location: Location) {}
  @HostListener('click')
  onClick() {
    this.location.back();
  }
}
