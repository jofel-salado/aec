export interface SignUpDict {
  confirmPassword: string;
  doesNotMatchPassword: string;
  emailAddress: string;
  invalidCredentials: string;
  invalidFormat: string;
  fieldCannotBeEmpty: string;
  password: string;
  signUp: string;
}

export interface HomeDict {
  layout: string;
  sample: string;
  signUp: string;
}

export interface NavBarDict {
  features: string;
  customers: string;
  integrations: string;
}

export interface FeaturesDict {
  features: string;
}

export interface CustomersDict {
  customers: string;
}

export interface IntegrationsDict {
  integrations: string;
}

export default interface Dict {
  signUp: SignUpDict;
  home: HomeDict;
  navBar: NavBarDict;
  features: FeaturesDict;
  customers: CustomersDict;
  integrations: IntegrationsDict;
}
