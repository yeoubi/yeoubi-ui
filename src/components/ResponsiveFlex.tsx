import styled from 'styled-components';
import {
  media,
  Flex,
} from '../internal';

export const ResponsiveFlex = styled(Flex)`
  flex-direction: row;

  ${media.sm`
    flex-direction: column;
  `}
`;
