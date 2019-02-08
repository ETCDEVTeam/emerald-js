import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const Target: React.ComponentType<SvgIconProps> = (props) => (
  <SvgIcon style={{fill:'none'}} stroke="currentColor" fill="none" strokeWidth="4" viewBox="0 0 64 64" {...props} >
    <circle cx="32" cy="32" r="24"/><circle cx="32" cy="32" r="16"/><circle cx="32" cy="32" r="8"/>
  </SvgIcon>
);

export default Target;
