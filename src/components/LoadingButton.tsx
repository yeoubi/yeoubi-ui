import React from 'react'
import {
  Flex,
  Button,
  Loading,
  ButtonProps,
} from '../internal'
import { LoadingProps } from './Loading';

export interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean;
  loadingProps?: LoadingProps;
}

export const LoadingButton: React.FunctionComponent<LoadingButtonProps> = ({
  isLoading,
  loadingProps,
  children,
  ...props
}) => (
  <Button
    position="relative"
    disabled={isLoading}
    {...props}
  >
    {children}
    {isLoading && (
      <Flex
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        justifyContent="center"
        alignItems="center"
        bgColor={props.bgColor}
      >
        <Loading {...loadingProps} />
      </Flex>
    )}
  </Button>
);
