import { Component } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: any
  constructor(private profileService: ProfileService) {}

    ngOnInit(): void {
      this.profileService.getProfile().subscribe((data) => {
        this.projects = data?.projects || [];
      });
    }
}
