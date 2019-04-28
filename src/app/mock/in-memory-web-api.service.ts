import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProjectMeta } from 'src/app/projects/shared/project.model';
import * as faker from 'faker';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class InMemoryWebApiService implements InMemoryDbService {

  constructor() { }

  private fakeProject(): ProjectMeta {
    const name = `${faker.company.bsAdjective()} ${faker.company.bsNoun()}`;
    return {
      id: faker.random.number(),
      slug: faker.helpers.slugify(name),
      name,
      description: faker.lorem.sentence(),
      latestVersion: `v${faker.random.number(10)}.${faker.random.number(20)}.${faker.random.number(1000)}`,
      lastUpdateUtc: faker.date.recent(365)
    };
  }

  createDb() {
    console.log(faker.company.bs(), faker.company.bsAdjective(), faker.company.bsBuzz(), faker.company.bsNoun())
    const projects: ProjectMeta[] = _.range(14).map(i => this.fakeProject());
    return {projects};
  }
}
