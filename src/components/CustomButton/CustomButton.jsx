import React from 'react';
import styled from 'styled-components';

const CustomButtonWrapper = styled.button`
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
`;

const CustomButton = ({text, onClickFunction}) => {
  return (
    <CustomButtonWrapper onClick={onClickFunction}> {text} </CustomButtonWrapper>
  )
}

export default CustomButton;