import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  max-width: 450px;
  margin-top: 80px;
  line-height: 56px;

  font-size: 48px;
  color: #3a3a3a;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  height: 60px;

  display: flex;

  input {
    flex: 1;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;
    transition: border 0.25s;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    border: 0;
    background: #04d361;
    color: #fff;
    font-weight: bold;
    border-radius: 0 5px 5px 0;
    transition: background 0.25s;

    &:hover {
      background: ${shade(0.05, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 60px;
  max-width: 700px;

  a {
    display: flex;
    width: 100%;
    padding: 14px;

    background: #fff;
    border-radius: 5px;
    text-decoration: none;
    align-items: center;
    transition: transform 0.5s;

    & + a {
      margin-top: 12px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 32px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 18px;
        color: #3d3d4d;
      }

      p {
        font-size: 16px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  display: block;
  margin-top: 5px;
  color: #c53030;
`;
