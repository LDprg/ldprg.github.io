import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public projects = [
    {
      name: 'Project 1',
      description: 'This is a project',
      language: 'TypeScript',
      reference: {
        platform: 'github',
        url: 'https://github.com',
      },
    },
    {
      name: 'Project 2',
      description: 'This is a project',
      language: 'TypeScript',
      reference: {
        platform: 'github',
        url: 'https://github.com',
      },
    },
  ];

  public selectedProject = this.projects[0];

  selectProject(project: any) {
    this.selectedProject = project;
  }
}
