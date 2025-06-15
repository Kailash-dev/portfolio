import { Component } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';
import { KeyValuePipe, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgStyle,NgIf,NgClass,KeyValuePipe,NgFor],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  profile: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(data => {
      this.profile = data;
    });
  }
}
