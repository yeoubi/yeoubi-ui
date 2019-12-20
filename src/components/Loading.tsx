import React from 'react';
import styled from 'styled-components';
import {
  Box,
  BoxProps,
} from '../internal';

export type LoadingProps = BoxProps;

export const Loading: React.FunctionComponent<LoadingProps> = styled(Box)`
  animation: rotate 0.8s infinite linear;
  border-right-color: transparent;
  border-radius: 50%;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
