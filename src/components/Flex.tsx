import React from 'react';
import styled from 'styled-components';
import {
  Common,
  CommonProps,
  Border,
  BorderProps,
  Background,
  BackgroundProps,
  Position,
  PositionProps,
  removeNonHTMLProps,
} from '../internal';

type Props = CommonProps & BorderProps & BackgroundProps & PositionProps & {
  inline?: boolean;
  vertical?: boolean;
  center?: boolean;
  vcenter?: boolean;
  vstart?: boolean;
  vend?: boolean;
  hcenter?: boolean;
  hstart?: boolean;
  hend?: boolean;
  between?: boolean;
  around?: boolean;
}

export const Flex = styled<React.FunctionComponent<Props>>((
  props,
) => React.createElement('div', removeNonHTMLProps(props)))`
  display: ${props => props.inline ? 'inline-' : ''}flex;
  flex-direction: ${props => props.vertical ? 'column' : 'row'};
  justify-content: ${({
    vertical,
    center,
    vcenter,
    vstart,
    vend,
    hcenter,
    hstart,
    hend,
    between,
    around,
  }) => {
    if (between) {
      return 'space-between';
    }
    if (around) {
      return 'space-around';
    }
    if (center || (vertical && vcenter) || (!vertical && hcenter)) {
      return 'center';
    }
    if ((vertical && vstart) || (!vertical && hstart)) {
      return 'flex-start'
    }
    if ((vertical && vend) || (!vertical && hend)) {
      return 'flex-end'
    }
    return undefined;
  }};
  align-items: ${({
    vertical,
    center,
    vcenter,
    vstart,
    vend,
    hcenter,
    hstart,
    hend,
  }) => {
    if (center || (vertical && hcenter) || (!vertical && vcenter)) {
      return 'center';
    }
    if ((vertical && hstart) || (!vertical && vstart)) {
      return 'flex-start';
    }
    if ((vertical && hend) || (!vertical && vend)) {
      return 'flex-end';
    }
    return undefined;
  }};
  ${Common}
  ${Border}
  ${Background}
  ${Position}
`;
