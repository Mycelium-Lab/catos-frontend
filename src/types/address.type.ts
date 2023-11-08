enum AddressOption {
  "registration" = "registration",
  "living" = "living"
}
enum Documnets {
  "paper" = "paper",
  "passport" = "passport"
}

export type Address = {
  region: string;
  neighborhood: string;
  city: string;
  street: string;
  house: string;
  housing: string;
  building: string;
  apartment: string;
  index: number;
};

export type AddressOptionString = keyof typeof AddressOption;
export type DocumnetsString = keyof typeof Documnets