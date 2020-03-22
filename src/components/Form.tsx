import React from 'react';
import {
  Box,
  BoxProps,
  HTMLFormProps,
} from '../internal';

export type FormProps = BoxProps & HTMLFormProps;

export const Form: React.FunctionComponent<FormProps> = (props) => (
  <Box as="form" {...props} />
);
