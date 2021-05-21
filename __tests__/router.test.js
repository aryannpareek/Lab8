/**
 * @jest-environment jsdom
 */
 import { pushToHistory } from '../scripts/router.js';

 describe('pushToHistory Tests', () => {
    test('stack length with no push', () => {
      expect(history.length).toBe(1);
    });
    
    test('stack length with one entry push', () => {
      expect(pushToHistory('entry', 1).length).toBe(2);
    });
  
    test('stack length with one settings push', () => {
      expect(pushToHistory('settings', -1).length).toBe(3);
    });
  
    test('stack length with one index push', () => {
      expect(pushToHistory('index', -1).length).toBe(4);
    });
    //History
  })


