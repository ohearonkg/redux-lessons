import React from 'react';
import styled from 'styled-components';

const FlashMessageWrapper = styled.div`
  background-color: red;
  color: white;
  text-align: center;
  font-weight: bold;
  padding: 20px 0;
`;

const FlashMessage = ({message}) => <FlashMessageWrapper> {message} </FlashMessageWrapper>

export default FlashMessage;