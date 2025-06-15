import { Component } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';
import { KeyValuePipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor,KeyValuePipe,NgIf],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: Record<string, string[]> | null = null;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
     this.profileService.getProfile().subscribe(data=>{
      console.log('profile', data)
      this.skills = data.skills
     });


  }
}
