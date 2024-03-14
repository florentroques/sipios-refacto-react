import React from 'react';
import { shallow } from 'enzyme';
import DomainFilter from './DomainFilter2.component';

describe('components', () => {
  describe('DomainFilter2', () => {
    it('should allow the user to filter', () => {
      const wrapper = shallow(<DomainFilter domains={['do']} />);

      expect(wrapper.find('select')).toHaveLength(3);
    })
  })
})
