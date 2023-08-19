import { faker } from '@faker-js/faker';
import { CATEGORY } from '../_utils/categories';

export function generatePosts(count: number) {
  const categories = Object.values(CATEGORY);
  return new Array(count).fill(null).map(() => {
    return {
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(),
      category: categories[Math.floor(Math.random() * categories.length)],
      infos: {},
    };
  });
}
