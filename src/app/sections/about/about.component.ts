import { Component } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';
import { KeyValuePipe, NgClass, NgFor, NgIf, NgStyle, NgSwitch } from '@angular/common';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgStyle,NgIf,NgClass,KeyValuePipe,NgFor,NgSwitch],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  about: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((data) => {
      this.about = data.about;
    });
  }
}
