import * as React from 'react';
// import { FormattedMessage } from 'react-intl';

import LanguageSwitcher from '../LanguageSwitcher';
import { ActionType } from '../../constants/types';
import { LocaleEnum } from '../../constants/enums';

import './styles.css';

interface Props {
  locale: LocaleEnum;
  toggleRightSidebar(): ActionType<string>;
}

const Header: React.SFC<Props> = (props) => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="logo" />
        <LanguageSwitcher
          locale={props.locale}
          toggleRightSidebar={props.toggleRightSidebar}
        />
      </div>
    </div>
  );
};

export default Header;
