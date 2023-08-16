const leoName = "Leo Musvaire";
const leoNumber = "2";
const leoStreet = "Church St.";
const leoPostal = "3105";
const leoBalance = "-10";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.21000111";
const sarahNumber = "13";
const sarahStreet = "William Close";
const sarahPostal = "0310";

// Only change below this line

//objects containing data for Leo and Sarah.
const leo = {
  name: `${leoName}`,
  balance: parseFloat(leoBalance).toFixed(2),
  access_id: "47afb389-8014-4d0b-aff3-e40203d2107f",
  age: 24,
  address: {
    number: `${leoNumber}`,
    street: `${leoStreet}`,
    postal_code: `${leoPostal}`,
  },
};

const sarah = {
  name: `${sarahName.trimEnd()} ${sarahSurname}`,
  age: 62,
  access_id: "6b279ae5-5657-4240-80e9-23f6b635f7a8",
  balance: parseFloat(sarahBalance).toFixed(2),
  address: {
    number: `${sarahNumber}`,
    street: `${sarahStreet}`,
    postal_code: `${sarahPostal}`,
  },
};

console.log(leo);
console.log(sarah);