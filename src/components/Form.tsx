import React from 'react';
import styled from 'styled-components';
import {
  Common,
  CommonProps,
  Grid,
  GridProps,
  Border,
  BorderProps,
  Background,
  BackgroundProps,
  Position,
  PositionProps,
  HTMLFormProps,
  removeNonHTMLProps,
} from '../internal';

export type FormProps = CommonProps &
  GridProps &
  BorderProps &
  BackgroundProps &
  PositionProps & 
  HTMLFormProps & {
    inline?: boolean;
  };

export const Form = styled<React.FunctionComponent<FormProps>>((
  props
) => React.createElement('form', removeNonHTMLProps(props)))`
  display: ${props => props.inline ? 'inline-' : ''}block;
  ${Common}
  ${Grid}
  ${Border}
  ${Background}
  ${Position}
`;
