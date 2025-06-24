import { Component } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';
import {CommonModule} from '@angular/common';
import {SkillCategory, SKILLS} from './skills-data';
import {animate, style, transition, trigger} from '@angular/animations';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-skills',
  standalone: true,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  imports: [ CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: SkillCategory[] = SKILLS;
  categories: string[] = ['All', ...SKILLS.map(s => s.category)];
  selectedCategory: string = 'All';

  get filteredSkills(): { name: string; level?: string }[] {
    if (this.selectedCategory === 'All') {
      return this.skills.flatMap(s => s.skills);
    }
    return this.skills.find(s => s.category === this.selectedCategory)?.skills || [];
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }


}
