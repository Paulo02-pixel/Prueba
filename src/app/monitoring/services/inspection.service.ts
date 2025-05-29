import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { environment } from '../../../environments/environment';
import { Inspection } from '../model/inspection.entity';

const inspectionEndpoint = environment.inspectionsEndpoint;

/**
 * @summary
 * Service to manage CRUD operations for Inspection entities.
 *
 * This service communicates with the backend API endpoint defined in the environment
 * to handle inspection records related to agricultural plots.
 * It extends the generic BaseService to leverage common HTTP methods.
 *
 * @author
 * Paulo Quincho
 */

@Injectable({
  providedIn: 'root'
})
export class InspectionService extends BaseService<Inspection> {
  constructor() {
    super();
    this.resourceEndpoint = inspectionEndpoint;
  }
}
