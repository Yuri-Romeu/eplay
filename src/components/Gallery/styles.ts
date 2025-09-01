import styled from 'styled-components';
import { Cores } from '../../styles';

export const Items = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin-right: 16px;

  img {
    border: 2px solid ${Cores.branca};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`;
