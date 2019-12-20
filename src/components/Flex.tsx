import React from 'react';
import styled from 'styled-components';
import {
  flexbox,
  FlexboxProps,
  Box,
  BoxProps,
} from '../internal';

export type FlexProps = BoxProps & FlexboxProps;

const FlexElement = styled(Box)`
  ${flexbox};
`;

export const Flex: React.FunctionComponent<FlexProps> = (props) => (
  <FlexElement display="flex" {...props} />
);
