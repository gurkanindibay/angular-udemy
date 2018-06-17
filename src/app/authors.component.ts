import {AuthorsService} from './authors.service';
import {Component} from '@angular/core';


@Component({
  selector: 'authors',
  template: `
    <h2>{{title}}</h2>
    <h2>{{authors.length}} authors </h2>
    <button class="btn btn-primary">Save</button>
    <ul>
      <li *ngFor='let author of authors'>
        {{author}}
      </li>
    </ul>
  `
})

export class AuthorsComponent {
  title = 'Angular Component';
  authors: string[];

  constructor(authorsService: AuthorsService) {
    this.authors = authorsService.getAuthors();
  }

}
