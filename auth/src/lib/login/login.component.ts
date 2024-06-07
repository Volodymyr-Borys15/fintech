import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fin-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {}
