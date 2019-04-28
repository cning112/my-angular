import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProjectMeta } from './project.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsHttpService {

  constructor(
    private http: HttpClient
  ) { }

  getProjects(): Observable<ProjectMeta[]> {
    const url = 'api/projects';
    return this.http.get<ProjectMeta[]>(url);
  }

  getProject(id: number): Observable<ProjectMeta> {
    const url = `api/projects/${id}`;
    return this.http.get<ProjectMeta>(url);
  }
}
