const data = [{
  "id": 1,
  "first_name": "Wilmer",
  "last_name": "Rosencrantz",
  "email": "wrosencrantz0@slate.com",
  "gender": "Male",
  "ip_address": "157.209.138.215"
}, {
  "id": 2,
  "first_name": "Pearle",
  "last_name": "Tremmel",
  "email": "ptremmel1@economist.com",
  "gender": "Female",
  "ip_address": "108.239.157.28"
}, {
  "id": 3,
  "first_name": "Sayers",
  "last_name": "Endley",
  "email": "sendley2@weebly.com",
  "gender": "Male",
  "ip_address": "133.59.124.248"
}, {
  "id": 4,
  "first_name": "Fairfax",
  "last_name": "Powling",
  "email": "fpowling3@4shared.com",
  "gender": "Male",
  "ip_address": "143.114.61.190"
}, {
  "id": 5,
  "first_name": "Sollie",
  "last_name": "Frantzen",
  "email": "sfrantzen4@mediafire.com",
  "gender": "Male",
  "ip_address": "239.219.156.82"
}, {
  "id": 6,
  "first_name": "Carmina",
  "last_name": "Curzey",
  "email": "ccurzey5@uiuc.edu",
  "gender": "Female",
  "ip_address": "181.64.144.86"
}, {
  "id": 7,
  "first_name": "Hamnet",
  "last_name": "Hukins",
  "email": "hhukins6@cargocollective.com",
  "gender": "Male",
  "ip_address": "37.221.87.59"
}, {
  "id": 8,
  "first_name": "Mufi",
  "last_name": "Heningham",
  "email": "mheningham7@freewebs.com",
  "gender": "Female",
  "ip_address": "127.80.165.199"
}, {
  "id": 9,
  "first_name": "Garold",
  "last_name": "Wysome",
  "email": "gwysome8@sfgate.com",
  "gender": "Male",
  "ip_address": "62.110.236.228"
}, {
  "id": 10,
  "first_name": "Penny",
  "last_name": "Kinnerley",
  "email": "pkinnerley9@angelfire.com",
  "gender": "Male",
  "ip_address": "241.220.45.252"
}];

class UserRepository {
  getUsers() {
    return data;
  }

  addUser(newUser) {
    data.push(newUser);
  }
}

export default new UserRepository();
