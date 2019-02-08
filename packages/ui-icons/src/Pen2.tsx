import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const Pen2: React.ComponentType<SvgIconProps> = (props) => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <path d="M20 56l36-36L44 8 8 44v12h12zm-8-16l12 12m12-36l12 12"/>
  </SvgIcon>
);

export default Pen2;
