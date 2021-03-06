import * as React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RightSidebar from '../../components/RightSidebar';

import { ActionType } from '../../constants/types';
import { LocaleEnum } from '../../constants/enums';

import './styles.css';

interface Props {
  children: React.ReactElement<{}>;
  locale: LocaleEnum;
  rightSidebarVisible: boolean;
  switchLanguage(payload: LocaleEnum): ActionType<string>;
  toggleRightSidebar(): ActionType<string>;
}

const Layout: React.SFC<Props> = (props) => {

  return (
    <div className="container">
      <Header
        locale={props.locale}
        toggleRightSidebar={props.toggleRightSidebar}
      />
      <div className="main">
        {props.children}
        <RightSidebar
          rightSidebarVisible={props.rightSidebarVisible}
          switchLanguage={props.switchLanguage}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
