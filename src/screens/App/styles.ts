import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #ec686f;
  height: 100vh;
  padding: 20px;
`;

export const Container = styled.div`
  background-color: whitesmoke;
  border-radius: 8px;
  padding: 20px;
  height: 100%;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;

  input {
    height: 30px;
    border: 1px solid #888;
    border-radius: 4px;
    padding: 0px 8px;
  }

  button {
    background-color: #92d5e6;
    border: none;
    border-radius: 4px;
  }
`;

export const List = styled.div`
  margin-top: 20px;
`;

export const Task = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px 0px;

  h2 {
    font-size: 16px;
    color: #222;
  }
`;
