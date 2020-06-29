/**
 * @module BigComemrce API Requests
 */

import request from "superagent";
import { apiBase, apiHeaders } from "./config";

export const getProduct = async (data = {}) =>
    await request
        .get(`${apiBase}/v3/catalog/products`)
        .query(data)
        .set(apiHeaders)
        .then((res): object => {
            console.log(res);
            return res;
        })
        .then((res): object => res.body.data[0] || {})
        .then((res): object => res)
        .catch(err => console.error(err));

export const getBrandName = async (data = {}) =>
    await request
        .get(`${apiBase}/v3/catalog/brands`)
        .query(data)
        .set(apiHeaders)
        .then((res): object => res.body.data[0] || {})
        .then((res): string => res)
        .catch(err => console.error(err));

export const getStorefront = async () =>
    await request
        .get(`${apiBase}/v2/store`)
        .set(apiHeaders)
        .then((res): object => res)
        .catch(err => console.error(err));

export const getProductImages = async (productID = {}) =>
    await request
        .get(`${apiBase}/v3/catalog/products/${productID}/images`)
        .set(apiHeaders)
        .then((res): object => res.body.data[0] || {})
        .then((res): string => res)
        .catch(err => console.error(err));

export const getCustomFields = async (data = {}) =>
    await request
        .get(`${apiBase}/v3/catalog/products/${data.id}/custom-fields`)
        .set(apiHeaders)
        .then((res): object => res.body.data || {})
        .then((res): string => res)
        .catch(err => console.error(err));

export const getProductModifiers = async (data = {}) =>
    await request
        .get(`${apiBase}/v3/catalog/products/${data.id}/modifiers`)
        .set(apiHeaders)
        .then((res): object => {
            return res.body.data || {};
        })
        .catch(err => console.error(err));

