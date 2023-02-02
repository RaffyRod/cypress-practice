//Input Data randomly generated to be use to fillout the semsee's project forms
import { faker } from '@faker-js/faker';
faker.setLocale('en_US');

const userData = {
  fullName: faker.name.fullName(),
};

export const userInfo = {
  userData
}