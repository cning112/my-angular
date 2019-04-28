import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Overview, Project } from './data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsHttpService {

  constructor(
    private http: HttpClient
  ) { }

  getProjects(): Observable<Overview[]> {
    const url = 'api/projects';
    return this.http.get<Overview[]>(url);
  }

  getProject(id: number): Observable<Project> {
    const url = `api/project/${id}`;
    return this.http.get<Project>(url);
  }
}
