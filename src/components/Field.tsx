import React from 'react';
import styled from 'styled-components';
import {
  Flex,
  FlexProps,
} from '../internal';

const Label = styled.label<FieldProps>`
  margin-left: 0.0625rem;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  color: ${props => props.color};
`;

export type FieldProps = FlexProps & {
  label?: string;
  name?: string;
  color?: string;
};

export const Field: React.FunctionComponent<FieldProps> = ({
  label,
  name,
  color,
  children,
  ...props
}) => (
  <Flex vertical {...props}>
    {
      label &&
      <Label htmlFor={name} color={color}>
        {label}
      </Label>
    }
    {children}
  </Flex>
);
