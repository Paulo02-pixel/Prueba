/**
 * @summary Environment configuration for development.
 *
 * @description
 * Contains configuration variables for the development environment,
 * including the server base URL and API endpoints for examiners, patients,
 * and mental state exams used by the application.
 *
 * @author Paulo Quincho
 */
export const environment = {
  production: false,
  serverBaseUrl: 'http://localhost:3000',
  plotsEndpoint: '/plots',
  inspectionsEndpoint: '/inspections',
};
