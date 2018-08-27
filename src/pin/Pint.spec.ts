
import { Pint } from './Pint';
import { FileMock } from '../gpio';

import { expect } from 'chai';

describe('Pint', () => {

  let file: FileMock;
  let pint: Pint;

  beforeEach(() => {
    file = new FileMock();
    pint = new Pint(file);
  });

  describe('read', () => {

    it('true', () => {
      file.push(1);
      return pint.read()
        .then(value => {
          expect(value).to.equal(true);
        });
    });

    it('false', () => {
      file.push(0);
      return pint.read()
        .then(value => {
          expect(value).to.equal(false);
        });
    });

  });
  
});
