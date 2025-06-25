import { Component } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';
import { NgFor, NgIf } from '@angular/common';
import {Project, PROJECTS} from './project-data';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [
    trigger('fadeInTimeline', [
      transition(':enter', [
        query('.timeline-item', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(100, [
            animate(
              '600ms ease-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ])
        ])
      ])
    ])
  ]
})
export class ProjectsComponent {
  projects = PROJECTS;

  categories: string[] = ['All', 'Web', 'Mobile', 'IoT', 'Admin'];
  selectedCategory: string = 'All';

  filteredProjects = [...this.projects];
  hoverTimeout: any = null;
  selectedProject: any = null;

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter((p: any) =>
        p.categories?.includes(category)
      );
    }
  }

  startPreview(project: any) {
  this.hoverTimeout = setTimeout(() => {
    this.selectedProject = project;
  }, 2000); // 2-second delay
}

cancelPreview() {
  clearTimeout(this.hoverTimeout);
}


  openProject(project: any) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }
}
