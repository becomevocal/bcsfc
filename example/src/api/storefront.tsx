/**
 * @module Global Storefront configuration and settings.
 */

export const BCStorefront = (data = {}) => {
  return (window.bigcommerce_storefront = data.body || {});
}


