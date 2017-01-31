'use strict';
import SelectComponent from './Select';
import { components as comps } from './fixtures/index';
import { Harness as Harness } from '../../../test/harness';
describe('Select Component', function() {
  it('Should build a Select component', function(done) {
    Harness.testCreate(SelectComponent, comps.comp1).then((component) => {
      Harness.testInputs(component, 'select', 1);
      Harness.testInputs(component, 'option', 7);
      done();
    });
  });
});
