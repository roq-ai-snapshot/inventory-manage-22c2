interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Inventory Manager'],
  tenantName: 'Business',
  applicationName: 'Inventory Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read product information',
    'Create orders',
    'Update own user information',
    'Read business information',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage business information',
    'Manage product information',
    'Manage order information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/74288c54-1dc8-43da-9dd3-72f2e00453ae',
};
