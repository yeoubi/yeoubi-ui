import React, {
  useCallback,
  forwardRef,
} from 'react';
import styled from 'styled-components';
import {
  Box,
  BoxProps,
  DEFAULT_FONT_SIZES,
  DEFAULT_LINE_HEIGHTS,
} from '../internal';

type ElementProps = BoxProps & {
  name?: string;
  ref?: any;
}

export type OptionType = string | { label: string; value: any };

export type SelectProps = ElementProps & {
  level: number;
  options: OptionType[];
  full?: boolean;
};

const SelectElement = styled(Box)<ElementProps>`
  appearance: none;
  background-color: #FFFFFF;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAArlBMVEUAAAA2Pj43Oz82PD42Oz3///82OzxmZmY2Oz1NTU05VVU1Oz1AQEA1PD42Oz01QEA2Oz01Ojw1Ozw8PDw2PD42Oz02Oz03PT02PDw2Oz01Oz04PT04PEA2Ozw2Ojw3Oz44Oz81Ojw6Pz82Oj01Ojw1O0E1Ozw1Ojw2Oz02Ojw7O0U2Ozw2Q0M1Oj07O041Ozw1OzxAQEA2Oj1AQEA1Oj2AgIA2Oz02Ojw3Ozw1OjwC6qbsAAAAOXRSTlMAQkGAkwGlBbUKCcQQeNEYaP3dIlr75y5M9+87QPL2Skn1Nez6K+X+bH8a1BPKDb+2CLME0gKXiIdaPhwMAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAASAAAAEgARslrPgAAAVVJREFUWMPtlNlygkAQRTvBBeOCCu6aRQWNa9Ro0v//Y0HSM67QQ6ry1udN+84pcOwLIAiCIAgCz4NZ7JELWJjJ8ppsBi3Og5jLc558LoxZnAfRLiR7nuwoZnEexGIpyVMqUizeVKYEVpx4j1NRqXJ8qFqjTN2Ni7h1itSqSY/tNSjWbN0PtJoUaHjJP2S7Q8Fu796416Vxpw0M/QFFn19uh69vNBz0OQ/AcETh8c3De2MajYa8B8APKD6ZXg6mExoEvonn7GIu/ynv6tv4K71mNldnTosXrhcxn5l6ABZLdUotXrReEcuFuQdgtVbnPqLFK9jq83qVxgOw2aqTx8XT64XbTToPwE6/y6dzWq/cLq0HYH/Qt6Rv8bBP7wn5wiu+/6SBs1pha4ND1wpbGxy6Vtja4FC1wtcGx2+tmNQGx7FWzGqDww9Ma4PDNa4NQRAE4T/5AXc8Urhqe4+OAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAyLTIwVDA3OjI0OjAxLTA1OjAwCLbogQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMi0yMFQwNzoyNDowMS0wNTowMHnrUD0AAAAASUVORK5CYII=');
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1rem;

  &:active,
  &:focus,
  &:hover {
    outline: none;
  }
`;

export const Select: React.FunctionComponent<SelectProps> = forwardRef((props, ref) => {
  const {
    level,
    full,
    options,
    theme: {
      fontSizes = DEFAULT_FONT_SIZES,
      lineHeights = DEFAULT_LINE_HEIGHTS,
      fonts: {
        body = undefined,
      } = {},
    } = {},
  } = props;

  const renderOptions = useCallback((option: OptionType) => {
    if (typeof option === 'object') {
      return (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      );
    }

    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  }, []);

  return (
    <SelectElement
      as="select"
      ref={ref}
      fontFamily={body}
      fontSize={fontSizes[level + 3]}
      lineHeight={lineHeights[level + 3]}
      width={full ? '100%' : undefined}
      {...props}
    >
      {options.map(renderOptions)}
    </SelectElement>
  );
});
