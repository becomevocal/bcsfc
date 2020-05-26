/**
 * @module BigComemrce API Requests
 */

import request from 'superagent';
import { apiBase, apiHeaders } from './config'

export const getProduct = async (data = {}) => await request
  .get(`${apiBase}/v3/catalog/products`)
  .query(data)
  .set(apiHeaders)
  .then((res): object => {
    if (!res.body.data) {
      return {};
    }

    return res.body.data[0];
  })
  .then((res): object => res)
  .catch(err => {
    console.log(err);
  });

export const getBrandName = async (data = {}) => await request
  .get(`${apiBase}/v3/catalog/brands`)
  .query(data)
  .set(apiHeaders)
  .then((res): object => {
    if (!res.body.data) {
      return {};
    }

    return res.body.data[0];
  })
  .then((res): string => res)
  .catch(err => {
    console.log(err);
  });
