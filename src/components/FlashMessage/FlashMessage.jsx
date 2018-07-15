import React from 'react';
import styled from 'styled-components';

const FlashMessageWrapper = styled.div`
  background-color: red;
  color: white;
`;

const FlashMessage = ({message}) => <FlashMessageWrapper> {message} </FlashMessageWrapper>

export default FlashMessage;