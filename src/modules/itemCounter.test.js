import itemsAPIStorage from '../../__mocks__/storage.js';
import itemsCounter from './itemsCounter.js';

const itemsArr = itemsAPIStorage;

/**
 * @jest-environment jsdom
 */

describe('Test - Count number of items fetched from API and displayed on Homepage', () => {
  const movie = {
    item_id: 'movie 1',
  };
  test('Actual length', () => {
    expect(itemsCounter(itemsAPIStorage)).toBe(itemsAPIStorage.length);
  });
  test('Adding one element', () => {
    itemsAPIStorage.push(movie);
    expect(itemsCounter(itemsAPIStorage)).toBe(itemsAPIStorage.length);
  });
  test('Adding another element', () => {
    itemsAPIStorage.push(movie);
    expect(itemsCounter(itemsAPIStorage)).toBe(itemsAPIStorage.length);
  });
});