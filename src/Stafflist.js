import { faker } from "@faker-js/faker";

faker.seed(123);

const stafflist = Array.from({ length: 3 }, (_, index) => ({
  id: index + 1,
  name: faker.person.fullName(),
  job: faker.person.jobTitle(),
  image: faker.image.avatar(),
}));

export default stafflist;