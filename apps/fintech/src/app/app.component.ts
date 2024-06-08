import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, HttpClientModule, CommonModule],
  selector: 'ft-root',
  template: `
    {{ (backend$ | async)?.message }}
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'fintech';
  backend$: Observable<any>;
  constructor(private readonly http: HttpClient) {
    this.backend$ = this.http.get('/api');
  }
}
