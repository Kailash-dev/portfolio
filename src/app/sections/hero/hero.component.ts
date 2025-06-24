import { Component } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';
import { KeyValuePipe, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import {MatButton, MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgStyle,NgIf,NgClass,KeyValuePipe,NgFor, MatButtonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  scrollToContact() {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
