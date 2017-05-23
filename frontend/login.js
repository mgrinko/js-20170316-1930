'use strict';

import { HttpService } from './services/http-service';

HttpService.getJSON('/data/user.json')
  .then((user) => {
    alert(`${user.name} has role ${user.role}`);
  });