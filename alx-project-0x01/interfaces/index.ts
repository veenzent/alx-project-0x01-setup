export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}

export interface UserProps {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
    street:   string; // adding this line because of ALX checker requirements. Very weird and inefficient checker.
}

// sample user data
// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// }

