import { faker } from '@faker-js/faker';

export default function generateCardData() {
  return {
    cardNumber: faker.finance.creditCardNumber('#### #### #### ####'),
    expiry: faker.date.future().toISOString().slice(2, 7).replace('-', '/'),
    cvv: faker.finance.creditCardCVV(),
    name: faker.name.fullName(),
  };
}
