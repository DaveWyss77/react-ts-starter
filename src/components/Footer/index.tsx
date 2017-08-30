import * as React from 'react';
// import { FormattedMessage } from 'react-intl';

import FooterSocialMedia from './FooterSocialMedia';
import FooterInfo from './FooterInfo';
import './styles.css';

const Footer: React.SFC<{}> = () => {
  return (
    <div className="footer">
      <FooterSocialMedia />
      <FooterInfo />
    </div>
  );
};

export default Footer;
