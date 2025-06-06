import styled from "styled-components";
import { Radio } from "antd"

export const WrapperStyleHeader = styled.div`
  background: rgb(255, 255, 255);
  padding: 9px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;

  span {
    color: rgb(36, 36, 36);
    font-weight: 400;
    font-size: 13px;
  }
`;

export const WrapperContainer = styled.div`
  width: 100%;
`;



export const WrapperValue = styled.div`
  background: rgb(140,248,255);
  border: 1px solid rgb(194,255,255);
  padding: 10px;
  width: fit-content;
  border-radius: 6px;
  margin-top: 4px;
`

export const WrapperListOrder = styled.div``;

export const WrapperItemOrder = styled.div`
  padding: 12px;
  background: #fdfdfd;
  border-radius: 12px;
  box-shadow: 0 0 0 1px #eee;
`;

export const ButtonDetail = styled.button`
  margin-top: 24px;
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const WrapperPriceDiscount = styled.span`
  color: #999;
  font-size: 12px;
  text-decoration: line-through;
  margin-left: 4px;
`;

export const WrapperCountOrder = styled.div`
  display: flex;
  align-items: center;
  width: 84px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const WrapperRight = styled.div`
  width: 320px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const WrapperInfo = styled.div`
  padding: 17px 20px;
  border-bottom: 1px solid #f5f5f5;
  background: #fff;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  width: 100%;
`;

export const WrapperItemOrderInfo = styled.div`
  padding: 17px 20px;
  background: #fff;
  border-radius: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;


export const WrapperTotal = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 17px 20px;
  background: #fff;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
`;

export const Label = styled.span`
  font-size: 12px;
  color: #000;
  font-weight: bold;
`;

export const WrapperRadio = styled(Radio.Group)`
  margin-top: 6px;
  background: rgb(240, 240, 255);
  border: 1px solid rgb(194, 225, 255);
  width: 500px;
  border-radius: 4px;
  height: 100px;
  padding: 16px;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;
