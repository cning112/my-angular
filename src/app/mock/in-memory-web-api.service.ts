import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Project } from 'src/app/projects/shared/project.model';


@Injectable({
  providedIn: 'root'
})
export class InMemoryWebApiService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const projects: Project[] = [
      {id: 1, slug: 'proj-1', name: 'Project 1', description: 'None', latestVersion: 'v0.0.1', lastUpdateUtc: new Date()},
      {id: 2, slug: 'proj-2', name: 'Project 2', description: 'None', latestVersion: 'v0.1.1', lastUpdateUtc: new Date()},
      {id: 3, slug: 'proj-3', name: 'Project 3', description: 'None', latestVersion: 'v0.2.1', lastUpdateUtc: new Date()},
      {id: 4, slug: 'proj-4', name: 'Project 4', description: 'None', latestVersion: 'v0.3.1', lastUpdateUtc: new Date()},
      {id: 5, slug: 'proj-5', name: 'Project 5', description: 'None', latestVersion: 'v0.4.1', lastUpdateUtc: new Date()},
      {id: 1, slug: 'proj-1', name: 'Project 1', description: 'None', latestVersion: 'v0.0.1', lastUpdateUtc: new Date()},
      {id: 2, slug: 'proj-2', name: 'Project 2', description: 'None', latestVersion: 'v0.1.1', lastUpdateUtc: new Date()},
      {id: 3, slug: 'proj-3', name: 'Project 3', description: 'None', latestVersion: 'v0.2.1', lastUpdateUtc: new Date()},
      {id: 4, slug: 'proj-4', name: 'Project 4', description: 'None', latestVersion: 'v0.3.1', lastUpdateUtc: new Date()},
      {id: 5, slug: 'proj-5', name: 'Project 5', description: 'None', latestVersion: 'v0.4.1', lastUpdateUtc: new Date()},
      {id: 1, slug: 'proj-1', name: 'Project 1', description: 'None', latestVersion: 'v0.0.1', lastUpdateUtc: new Date()},
      {id: 2, slug: 'proj-2', name: 'Project 2', description: 'None', latestVersion: 'v0.1.1', lastUpdateUtc: new Date()},
      {id: 3, slug: 'proj-3', name: 'Project 3', description: 'None', latestVersion: 'v0.2.1', lastUpdateUtc: new Date()},
      {id: 4, slug: 'proj-4', name: 'Project 4', description: 'None', latestVersion: 'v0.3.1', lastUpdateUtc: new Date()},
      {id: 5, slug: 'proj-5', name: 'Project 5', description: 'None', latestVersion: 'v0.4.1', lastUpdateUtc: new Date()},
      {id: 1, slug: 'proj-1', name: 'Project 1', description: 'None', latestVersion: 'v0.0.1', lastUpdateUtc: new Date()},
      {id: 2, slug: 'proj-2', name: 'Project 2', description: 'None', latestVersion: 'v0.1.1', lastUpdateUtc: new Date()},
      {id: 3, slug: 'proj-3', name: 'Project 3', description: 'None', latestVersion: 'v0.2.1', lastUpdateUtc: new Date()},
      {id: 4, slug: 'proj-4', name: 'Project 4', description: 'None', latestVersion: 'v0.3.1', lastUpdateUtc: new Date()},
      {id: 5, slug: 'proj-5', name: 'Project 5', description: 'None', latestVersion: 'v0.4.1', lastUpdateUtc: new Date()},
    ];
    console.log('pass thru');
    return {projects};
  }
}
