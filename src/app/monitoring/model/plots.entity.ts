/**
 * @summary
 * Represents an agricultural plot entity with relevant attributes.
 *
 * This class models the key properties of a plot such as its unique identifier,
 * name, location, size in hectares, and the date when monitoring started.
 * It includes a constructor to initialize the properties with optional data.
 *
 * @author
 * Paulo Quincho
 */

export class Plot {
  id: number;
  name: string;
  location: string;
  hectares: string;
  monitoringStartDate: string;

  constructor(plot: {id?: number, name?: string, location?: string, hectares?: string, monitoringStartDate?: string}) {
    this.id = plot.id || 0;
    this.name = plot.name || '';
    this.location = plot.location || '';
    this.hectares = plot.hectares || '';
    this.monitoringStartDate = plot.monitoringStartDate || '';
  }
}
