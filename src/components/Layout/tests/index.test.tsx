import { shallow } from 'enzyme';
import * as React from 'react';

import Layout from '../';
import { LocaleEnum } from '../../../constants/enums';

describe('<Layout />', () => {

  test('shows the right components', () => {
    const wrapper = shallow(
      <Layout
        children={<div/>}
        locale={LocaleEnum.en}
        rightSidebarVisible={true}
        switchLanguage={jest.fn()}
        toggleRightSidebar={jest.fn()}
      />
    );
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('RightSidebar').length).toEqual(1);
    expect(wrapper.find('Footer').length).toEqual(1);
  });

});
