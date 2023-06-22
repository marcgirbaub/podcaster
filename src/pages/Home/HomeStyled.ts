import styled from "@emotion/styled";

const HomeStyled = styled.div`
  .info {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 14px;
    padding: 10px 0 30px;

    &__podcasts-number {
      background-color: #0085d1;
      padding: 4px;
      border-radius: 8px;
      font-weight: bold;
      font-size: 1rem;
      color: #fff;
    }

    &__filter {
      padding: 8px 10px;
      width: 300px;
      border-radius: 6px;
      border: 2px solid rgba(0, 0, 0, 0.2);
      font-size: 1rem;
    }
  }
`;

export default HomeStyled;
