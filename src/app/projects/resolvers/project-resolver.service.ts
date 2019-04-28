import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Project } from '../shared/data.model';
import { Observable, of, EMPTY } from 'rxjs';
import { ProjectsHttpService } from '../shared/projects-http.service';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectResolverService implements Resolve<Project> {
  constructor(
    private projectsService: ProjectsHttpService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project> | Observable<never> {
    const id = +route.paramMap.get('id');
    return this.projectsService.getProject(id).pipe(
      take(1),
      mergeMap(project => {
        if (project) {
          return of(project);
        } else {
          this.router.navigate(['/']);
          return EMPTY;
        }
      })
    );
  }
}
