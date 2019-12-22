import React from 'react';
import {
  Box,
  BoxProps,
} from '../internal';

export type FlexProps = BoxProps;

export const Flex: React.FunctionComponent<FlexProps> = (props) => (
  <Box display="flex" {...props} />
);
