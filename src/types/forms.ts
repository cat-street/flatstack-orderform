interface AddressData {
  name: string;
  address: string;
  address2: string;
  city: string;
  country: string;
  'postal-code': string;
}

export interface ShippingValues extends AddressData {
  phone: string;
}

export interface BillingValues extends AddressData {
  email: string;
}

export interface UserState {
  shippingData: ShippingValues,
  billingData: BillingValues,
  shippingValid: boolean,
  billingValid: boolean,
}
