import React from 'react'
import styled from 'styled-components';
import {
  Button,
  Loading,
  ButtonProps,
} from '../internal'

const Wrapper = styled.div<LoadingButtonProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`;

export interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean;
  loadingColor?: string;
  loadingWidth?: number;
  loadingSize?: 'large' | 'normal' | 'small';
}

export const LoadingButton: React.FunctionComponent<LoadingButtonProps> = ({
  isLoading,
  loadingColor,
  loadingWidth,
  loadingSize,
  children,
  ...props
}) => (
  <Button disabled={isLoading} {...props}>
    {children}
    {isLoading && (
      <Wrapper bgColor={props.bgColor}>
        <Loading
          color={loadingColor}
          width={loadingWidth}
          size={loadingSize}
        />
      </Wrapper>
    )}
  </Button>
);
