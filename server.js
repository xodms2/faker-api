const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

const createUser = () => {
  const newUser = {
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
  return newUser;
};

const createCompany = () => {
  const newCompany = {
    _id: faker.datatype.uuid(),
    companyName: faker.company.companyName(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country() 
    }
  }
  return newCompany;
}

app.get("/api/user/new", (req, res) => {
  const user = createUser();
  console.log(user);
  res.json(user);
})

app.get("/api/company/new", (req, res) => {
  const company = createCompany();
  console.log(company);
  res.json(company);
})

app.get("/api/user/company", (req, res) => {
  const user = createUser();
  const company = createCompany();
  console.log(user);
  console.log(company);
  res.json({
    user: user,
    company: company
  });
  
})

app.listen(port, () => {
  console.log("App is listening on port ", port);
});