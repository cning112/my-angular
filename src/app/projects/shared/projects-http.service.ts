import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsHttpService {

  constructor() { }

  // TODO: get data from server
  getProjects(): Observable<Project[]> {
    return of([
      {id: 1, slug: 'proj-1', name: 'Project 1', description: 'None', latestVersion: 'v0.0.1', lastUpdateUtc: new Date()},
      {id: 1, slug: 'proj-1', name: 'Project 1', description: 'None', latestVersion: 'v0.0.1', lastUpdateUtc: new Date()},
      {id: 1, slug: 'proj-1', name: 'Project 1', description: 'None', latestVersion: 'v0.0.1', lastUpdateUtc: new Date()},
      {id: 1, slug: 'proj-1', name: 'Project 1', description: 'None', latestVersion: 'v0.0.1', lastUpdateUtc: new Date()},
      {id: 1, slug: 'proj-1', name: 'Project 1', description: 'None', latestVersion: 'v0.0.1', lastUpdateUtc: new Date()}
    ]).pipe(delay(1000));
  }
}
