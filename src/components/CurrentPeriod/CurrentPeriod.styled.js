import styled from 'styled-components';

export const DateContainer = styled.div`
  /* margin-bottom: 32px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 100px;
    /* margin-bottom: 0; */
  }
  @media screen and (min-width: 1280px) {
    margin-left: 214px;
  }
`;

export const Title = styled.p`
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.04em;

  color: rgba(82, 85, 95, 0.7);
`;

export const DateWrapper = styled.div`
  display: flex;
`;

export const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 7px;
`;

export const Date = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #000000;
`;
