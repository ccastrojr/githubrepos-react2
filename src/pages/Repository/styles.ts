import styled from 'styled-components';
import { darken } from 'polished';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a8a8b3;
    transition: color 0.25s;

    &:hover {
      color: ${darken(0.2, '#a8a8b3')};
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 110px;
      height: 110px;
      border-radius: 55px;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 28px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 60px;

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
