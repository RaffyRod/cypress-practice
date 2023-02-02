//Input Data randomly generated to be use to fillout the semsee's project forms
import { faker } from '@faker-js/faker';
faker.setLocale('en_US');

const userData = {
  firstName: faker.name.firstName(),
  replacementName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  fullName: faker.name.fullName(),
  jobTitle: faker.name.jobTitle(),
  password: faker.internet.password(),
  email: faker.internet.email(),
  phoneNumberFormat: faker.phone.number('(###) ###-####'),
  phoneNumberExt: faker.phone.number('###'),
  address: faker.address.state(),
  address: faker.address.city(),
  zipCode: faker.address.zipCode(),
  zipCodeByState: faker.address.zipCodeByState("AL"),
  establishedYear: String(Math.floor(Math.random() * (2022 - 1999 + 1 )) + 1999),
  randomAlphaNumericString: faker.random.numeric(7),
  editClassCode: faker.random.numeric(7),
  companyName: faker.company.name()
};

export const userInfo = {
  userData
}