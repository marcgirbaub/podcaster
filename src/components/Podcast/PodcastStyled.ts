import styled from "@emotion/styled";

const PodcastStyled = styled.div`
  margin-top: 200px;
  width: 260px;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 14px;
  gap: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 4px;

  .podcast {
    &__image {
      position: absolute;
      top: -85px;
      border-radius: 50%;
    }

    &__info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 10px;
      height: 100%;
      margin-top: 80px;
    }
  }

  .info {
    &__name {
      text-transform: uppercase;
      font-weight: 600;
    }

    &__artist {
      color: #808080;
    }
  }
`;

export default PodcastStyled;
