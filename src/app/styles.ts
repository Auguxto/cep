import styled from "styled-components";

export const Container = styled.form`
  display: flex;

  width: 100%;
  height: 100vh;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-color: #f3f7fc;
`;

export const InputWrapper = styled.div`
  display: flex;

  width: 300px;
  height: 48px;

  background-color: #ffffff;

  align-items: center;
  justify-content: space-between;

  padding: 0 20px;

  border: 1px solid #e6eaf2;
  border-radius: 12px;
`;

export const Input = styled.input`
  display: flex;

  flex: 1;

  font-size: 16px;

  color: #66719b;

  padding-right: 10px;

  ::placeholder {
    font-size: 16px;

    color: #66719b;
  }
`;

export const Errors = styled.div`
  display: flex;

  width: 300px;

  flex-direction: column;

  padding: 10px;
`;

export const Error = styled.p`
  font-weight: 400;
  font-size: 10px;

  color: #e73939;
`;
