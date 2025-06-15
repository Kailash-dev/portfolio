import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../../core/services/profile.service';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,NgClass,NgFor],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  profile: any;

  constructor(private readonly profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((data) => {
     
      this.profile = data;
    });
  }
}
