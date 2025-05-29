import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Plot} from '../model/plots.entity';
import {environment} from '../../../environments/environment';

const plotsResourceEndpointPath = environment.plotsEndpoint;

/**
 * @summary
 * Service to handle CRUD operations for Plot entities using a base service abstraction.
 *
 * This service is responsible for interacting with the backend API endpoint defined in the environment configuration
 * to fetch, create, update, and delete agricultural plots.
 *
 * @author
 * Paulo Quincho
 */

@Injectable({
  providedIn: 'root'
})
export class PlotService extends BaseService<Plot>{

  constructor() {
    super();
    this.resourceEndpoint = plotsResourceEndpointPath;
  }
}
