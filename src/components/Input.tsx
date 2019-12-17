import React from 'react';
import styled, { css } from 'styled-components';
import {
  Common,
  CommonProps,
  Border,
  BorderProps,
  Background,
  BackgroundProps,
  Position,
  PositionProps,
  Typography,
  TypographyProps,
  removeNonHTMLProps,
  HTMLInputProps,
  HTMLTextAreaProps,
  BODY_STYLE,
} from '../internal';

type ElementProps = CommonProps &
  BorderProps &
  BackgroundProps &
  PositionProps &
  TypographyProps &
  HTMLInputProps &
  HTMLTextAreaProps & {
    level: number;
    ref?: any;
    full?: boolean;
    password?: boolean;
    textarea?: boolean;
  };

export type InputProps = ElementProps & {
  forwardedRef?: any;
  type?: string;
  name?: string;
  value?: string;
  onPressEnter?: () => void;
  onChangeText?: (value: string) => void;
}

const InputElement = styled<React.FunctionComponent<ElementProps>>(React.forwardRef((
  props,
  ref,
) => React.createElement(props.textarea ? 'textarea' : 'input', { ref, ...removeNonHTMLProps(props) })))`
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #d2d2d2;
  }
  :-ms-input-placeholder {
    color: #d2d2d2;
  }
  -moz-appearance:textfield;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  outline: none;
  ${props => props.full && css`
    width: 100%;
  `}
  ${props => BODY_STYLE[props.level]}
  ${Typography}
  ${Common}
  ${Border}
  ${Background}
  ${Position}
`;

class InputComponent extends React.PureComponent<InputProps> {
  static defaultProps = {
    type: 'text',
  };

  public render() {
    const {
      forwardedRef,
      ...props
    } = this.props;

    return (
      <InputElement
        ref={forwardedRef}
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
        autoCorrect="off"
        autoComplete="off"
        autoCapitalize="none"
        {...props}
      />
    );
  }

  private onChange = ({ target }: React.ChangeEvent<any>) => {
    const { onChangeText } = this.props;

    if (onChangeText) {
      onChangeText(target.value);
    }
  }

  private onKeyPress = ({ key }: React.KeyboardEvent<any>) => {
    if (key === 'Enter') {
      const { onPressEnter } = this.props;
      if (onPressEnter) {
        onPressEnter();
      }
    }
  }
}

export const Input = React.forwardRef<any, InputProps>((props, ref) => (
  <InputComponent {...props} forwardedRef={ref} />
));
