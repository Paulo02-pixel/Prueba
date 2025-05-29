/**
 * @summary
 * Represents an agricultural inspection record linked to a plot.
 *
 * This class contains properties detailing the inspection including
 * observations, recommended actions, crop status, and the inspection date.
 * It includes a constructor to initialize the inspection with optional data.
 *
 * @author
 * Paulo Quincho
 */

export class Inspection {
  id?: number;
  plotId: number;
  observations: string;
  recommendedActions: string;
  cropStatus: string;
  inspectionDate: string;

  constructor(inspection: {id?: number, plotId?: number, observations?: string, recommendedActions?: string,
    cropStatus?: string, inspectionDate?: string}) {
    this.id = inspection.id || 0;
    this.plotId = inspection.plotId || 0;
    this.observations = inspection.observations || '';
    this.recommendedActions = inspection.recommendedActions || '';
    this.cropStatus = inspection.cropStatus || '';
    this.inspectionDate = inspection.inspectionDate || '';
  }
}
