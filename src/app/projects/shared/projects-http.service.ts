import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Project } from './project.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsHttpService {

  constructor(
    private http: HttpClient
  ) { }

  getProjects(): Observable<Project[]> {
    const url = 'api/projects';
    return this.http.get<Project[]>(url);
  }

  getProject(id: number): Observable<Project> {
    const url = `api/projects/${id}`;
    return this.http.get<Project>(url);
  }
}
