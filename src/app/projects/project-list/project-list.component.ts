import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../shared/project.model';
import * as moment from 'moment';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  @ViewChild('input') private searchBox: ElementRef;
  private projects: Project[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.searchBox.nativeElement.focus();
    this.route.data.subscribe((data: {projects: Project[]}) => {
      this.projects = data.projects;
    });
  }

  fromNow(dt: Date): string {
    return moment(dt).fromNow();
  }

}
