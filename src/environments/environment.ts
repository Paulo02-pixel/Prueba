/**
 * @summary Environment configuration for production.
 *
 * @description
 * Contains configuration variables for the production environment,
 * including the server base URL and API endpoints.
 *
 * @author Paulo Quincho
 */

export const environment = {
  production: true,
  serverBaseUrl: 'http://localhost:3000',
  plotsEndpoint: '/plots',
  inspectionsEndpoint: '/inspections',
};

