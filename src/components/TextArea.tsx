import React from 'react';
import {
  Input,
  InputProps,
  HTMLTextAreaProps,
} from '../internal';

export type TextAreaProps = InputProps & HTMLTextAreaProps;

export const TextArea: React.FunctionComponent<TextAreaProps> = React.forwardRef((props, ref) => (
  <Input as="textarea" ref={ref} {...props} />
));
