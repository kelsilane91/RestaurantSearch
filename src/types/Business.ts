export interface Business {
  alias: string;
  categories: [
    {
      alias: string;
      title: string;
    }
  ];
  coordinates: {
    latitude: string;
    longitude: string;
  };
  display_phone: string;
  distance: number;
  id: string;
  image_url: string;
  is_closed: boolean;
  location: {
    address1: string;
    address2: string;
    address3: string;
    city: string;
    country: string;
    display_address: string[];
    state: string;
    zip_code: string;
  };
  name: string;
  phone: string;
  price: string; //enum ,
  rating: number;
  review_count: number;
  transactions: string[];
  url: string;
}
