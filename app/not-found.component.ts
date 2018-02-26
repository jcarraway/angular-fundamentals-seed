import { Component } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'not-found',
  template: `
    <div>
      Well, you broke it. Congrats. <a routerLink="/">
      Go Home
    </a>
    </div>
  `
})
export class NotFoundComponent {}
