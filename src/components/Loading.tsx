import React from 'react';
import styled from 'styled-components';
import {
  toRem,
  removeNonHTMLProps,
} from '../internal';

const size = (props: LoadingProps) => {
  switch (props.size) {
    case 'large':
      return '2rem'
    case 'small':
      return '1rem'
    default:
      return '1.375rem'
  }
};

export interface LoadingProps {
  color?: string;
  width?: number;
  size?: 'large' | 'normal' | 'small';
}

export const Loading = styled<React.FunctionComponent<LoadingProps>>((
  props,
) => React.createElement('div', removeNonHTMLProps(props)))`
  width: ${size};
  height: ${size};
  margin: auto;
  animation: rotate 0.8s infinite linear;
  border: ${props => toRem(props.width || 2)} solid ${props => props.color};
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
