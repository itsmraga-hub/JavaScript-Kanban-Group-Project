import commentsAPI from '../../__mocks__/comments.js';
import { commentCounter } from './modal.js';

const commentsArr = commentsAPI;
/**
 * @jest-environment jsdom
 */

describe('Test - Count number of comments found in a particular item and make sure the number is correct', () => {
  test('Item 1 tests for its number of comments', () => {
    expect(commentCounter(commentsArr[0].comments)).toBe(1);
  });
  test('Item 2 tests for its number of comments', () => {
    expect(commentCounter(commentsArr[1].comments)).toBe(3);
  });
  test('Item 1 tests for its number of comments', () => {
    expect(commentCounter(commentsArr[2].comments)).toBe(3);
  });
  test('Item 1 tests for its number of comments', () => {
    expect(commentCounter(commentsArr[3].comments)).toBe(2);
  });
  test('Item 1 tests for its number of comments', () => {
    expect(commentCounter(commentsArr[4].comments)).toBe(0);
  });
});