/**
 * @module API Config
 *
 * @description default config settings for SuperAgent requests.
 */

const pkg = require('../../package.json');
const serviceConfig = pkg.bc_api_config;
const apiBase = `/stores/${serviceConfig.store_hash}`;
const apiHeaders = {
  'X-Auth-Client': serviceConfig.client_id,
  'X-Auth-Token': serviceConfig.access_token,
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}

export { apiBase, apiHeaders }
