import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Project } from './project.model';
import { Observable, of, EMPTY } from 'rxjs';
import { ProjectsHttpService } from './projects-http.service';
import { take, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsResolverService implements Resolve<Project[]> {

  constructor(
    private projectHttpSerivce: ProjectsHttpService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project[]> | Observable<never> {
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
