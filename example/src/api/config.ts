/**
 * @module API Config
 *
 * @description default config settings for SuperAgent requests.
 */

// TODO: potentially add a set of base generic credentials from BC?
let serviceConfig = require('../../local-config-sample.json')

try {
  serviceConfig = require('../../local-config.json')
} catch (e) {
  console.info('WARNING: Make a copy of the local-config-sample.json and rename it to local-config.json and add your API credentials.')
  console.log(e)
}

const apiBase = `/stores/${serviceConfig.store_hash}`;
const apiHeaders = {
  'X-Auth-Client': serviceConfig.client_id,
  'X-Auth-Token': serviceConfig.access_token,
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}

export { apiBase, apiHeaders }
