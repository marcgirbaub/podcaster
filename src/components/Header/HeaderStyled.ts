import styled from "@emotion/styled";

const HeaderStyled = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 2;
  height: 54px;
  padding: 14px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  .header {
    &__title {
      font-weight: bold;
      color: #0085d1;
      font-size: 1.4rem;
    }
  }
`;

export default HeaderStyled;
