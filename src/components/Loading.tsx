import React from 'react';
import styled from 'styled-components';
import { toRem } from '../internal';

export interface Props {
  isLoading?: boolean;
  color?: string;
  width?: number;
  size?: 'large' | 'normal' | 'small';
}

const size = (props: Props) => {
  switch (props.size) {
    case 'large':
      return '2rem'
    case 'small':
      return '1rem'
    default:
      return '1.375rem'
  }
};

const Wrapper = styled.div`
  margin: auto;
`;

const Progress = styled.div<Props>`
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

export const Loading: React.FunctionComponent<Props> = ({
  isLoading,
  children,
  ...props
}) => (
  isLoading ? (
    <Wrapper>
      <Progress {...props} />
    </Wrapper>
  ) : (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
);
