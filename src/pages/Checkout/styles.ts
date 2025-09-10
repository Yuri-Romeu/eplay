import styled from 'styled-components';
import { Cores } from '../../styles';

type InputGroupProps = {
  maxWidth?: string;
};

type RowProps = {
  marginTop?: string;
};

type TabButtonProps = {
  isActive: boolean;
};

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
`;

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${Cores.branca};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${Cores.branca};
    padding: 0 8px;
    width: 100%;
  }
`;

export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${Cores.branca};
  background-color: ${(props) => (props.isActive ? Cores.verde : Cores.preta)};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;

  img {
    margin-right: 8px;
  }
  cursor: pointer;
`;
