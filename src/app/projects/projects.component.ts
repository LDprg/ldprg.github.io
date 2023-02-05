import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public projects = [
    {
      short: 'JEM',
      long: 'Java Environment Manager',
      description:
        'JEM is a tool that allows you to manage Java versions with a simple command line interface. It is written in Go and is available for Windows, Linux and MacOS.',
      language: 'Go',
      reference: [
        {
          name: 'JEM Source',
          platform: 'Github',
          url: 'https://github.com/LDprg/JEM',
        },
      ],
    },
    {
      short: 'LDscript',
      long: 'LDscript Compiler',
      description:
        'LDscript is a compiled/interpreted experimental programming language that tries to fuse Python and C++ into a simple and easy to use language. Furthermore LDscript wants to give programmers new features for dataoriented design. It is written in C++ and uses Antlr4 and LLVM for maximum Performance.',
      language: 'C++',
      reference: [
        {
          name: 'LDscript Source',
          platform: 'Bitbucket',
          url: 'https://bitbucket.org/ldprg/ldscriptcompiler',
        },
        {
          name: 'LDscript Kanban',
          platform: 'Trello',
          url: 'https://trello.com/b/ngfB2DVz/ldscript',
        },
        {
          name: 'LDscript Documentation',
          platform: 'Gitbook',
          url: 'https://ldprg.gitbook.io/ldscript',
        },
      ],
    },
    {
      short: 'Learnify',
      long: 'Learnify Learning Platform',
      description:
        'Learnify is a self-hosted web application that allows you to create and share your own learning cards. It is written in TypeScript (Angular) and uses a custom backend. It main goal is to provide detailed statistics about your learning progress and help you to get the most efficient learning Strategy.',
      language: 'TypeScript (Angular)',
      reference: [
        {
          name: 'Learnify Source',
          platform: 'Github',
          url: 'https://github.com/LDprg/learnify2',
        },
        {
          name: 'Learnify Server Source',
          platform: 'Github',
          url: 'https://github.com/LDprg/learnify2Server',
        },
      ],
    },
    {
      short: 'ArduinoHAL',
      long: 'Arduino Hardware Abstraction Layer',
      description:
        'ArduinoHAL is an easy to use Abstraction Layer for Arduino that allows you write simpler and cleaner code when directly programming the µC. It is written in C and makes heavy use of the C preprocessor and therefore has no runtime overhead.',
      language: 'C',
      reference: [
        {
          name: 'ArduinoHAL Source',
          platform: 'Github',
          url: 'https://github.com/LDprg/ArduinoHAL',
        },
      ],
    },
    {
      short: 'ldprg.github.io',
      long: 'This portfolio website',
      description:
        'This website is also a project of mine. It is written in TypeScript (Angular) and uses Tailwind. It is hosted on Github Pages and allows you to inform yourself about my projects, contacts and basic information.',
      language: 'TypeScript (Angular)',
      reference: [
        {
          name: 'ldprg.github.io Source',
          platform: 'Github',
          url: 'https://github.com/LDprg/ldprg.github.io',
        },
        {
          name: 'ldprg.github.io Website',
          platform: 'Web',
          url: 'https://ldprg.github.io',
        },
      ],
    },
  ];

  public selectedProject = this.projects[0];

  selectProject(project: any) {
    this.selectedProject = project;
  }
}
