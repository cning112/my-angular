import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsResolverService } from './resolvers/projects-resolver.service';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectResolverService } from './resolvers/project-resolver.service';

const routes: Routes = [
  { path: 'projects', component: ProjectListComponent, resolve: {projects: ProjectsResolverService} },
  { path: 'project/:id', component: ProjectDetailsComponent, resolve: {project: ProjectResolverService} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
