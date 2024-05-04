/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { faker } from '@faker-js/faker';
import { HttpResponse, delay, http } from 'msw';
import type { Pet, Pets } from '../model';

export const getListPetsResponseMock = (overrideResponse: any = {}): Pets =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    '@id': faker.helpers.arrayElement([faker.word.sample(), undefined]),
    callingCode: faker.helpers.arrayElement([
      faker.helpers.arrayElement(['+33', '+420', '+33'] as const),
      undefined,
    ]),
    country: faker.helpers.arrayElement([
      faker.helpers.arrayElement([
        "People's Republic of China",
        'Uruguay',
      ] as const),
      undefined,
    ]),
    email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
    id: (() => faker.number.int({ min: 1, max: 99999 }))(),
    name: (() => faker.person.lastName())(),
    tag: (() => faker.person.lastName())(),
    ...overrideResponse,
  }));

export const getCreatePetsResponseMock = (overrideResponse: any = {}): Pet => ({
  '@id': faker.helpers.arrayElement([faker.word.sample(), undefined]),
  callingCode: faker.helpers.arrayElement([
    faker.helpers.arrayElement(['+33', '+420', '+33'] as const),
    undefined,
  ]),
  country: faker.helpers.arrayElement([
    faker.helpers.arrayElement([
      "People's Republic of China",
      'Uruguay',
    ] as const),
    undefined,
  ]),
  email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
  id: faker.number.int({ min: undefined, max: undefined }),
  name: (() => faker.person.lastName())(),
  tag: (() => faker.person.lastName())(),
  ...overrideResponse,
});

export const getShowPetByIdResponseMock = (): Pet =>
  (() => ({
    id: faker.number.int({ min: 1, max: 99 }),
    name: faker.person.firstName(),
    tag: faker.helpers.arrayElement([faker.word.sample(), void 0]),
  }))();

export const getListPetsMockHandler = (overrideResponse?: Pets) => {
  return http.get('*/v:version/pets', async () => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? overrideResponse
          : getListPetsResponseMock(),
      ),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  });
};

export const getCreatePetsMockHandler = (overrideResponse?: Pet) => {
  return http.post('*/v:version/pets', async () => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? overrideResponse
          : getCreatePetsResponseMock(),
      ),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  });
};

export const getShowPetByIdMockHandler = (overrideResponse?: Pet) => {
  return http.get('*/v:version/pets/:petId', async () => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? overrideResponse
          : getShowPetByIdResponseMock(),
      ),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  });
};
export const getSwaggerPetstoreMock = () => [
  getListPetsMockHandler(),
  getCreatePetsMockHandler(),
  getShowPetByIdMockHandler(),
];
