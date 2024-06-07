import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '@fintech/auth';

@Component({
  standalone: true,
  imports: [RouterModule, HttpClientModule, CommonModule, AuthComponent],
  selector: 'app-root',
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
