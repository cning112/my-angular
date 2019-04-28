import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { ProjectMeta } from '../shared/project.model';
import { Observable, of, EMPTY } from 'rxjs';
import { ProjectsHttpService } from '../shared/projects-http.service';
import { take, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsResolverService implements Resolve<ProjectMeta[]> {

  constructor(
    private projectHttpSerivce: ProjectsHttpService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProjectMeta[]> | Observable<never> {
    return this.projectHttpSerivce.getProjects().pipe(
      // The Router guards require an observable to complete, meaning it has emitted all of its values.
      // You use the take operator with an argument of 1 to ensure that the Observable completes after retrieving the first value
      take(1),
      mergeMap(projects => {
        if (projects) {
          return of(projects);
        } else {
          this.router.navigate(['/']);  // TODO: this should be some error messages
          return EMPTY;
        }
      })
    );
  }
}
