import styled from "@emotion/styled";

const SkeletonPodcastStyled = styled.div`
  margin-top: 90px;
  width: 260px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 14px;
  gap: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 4px;

  .skeleton {
    &__image {
      position: absolute;
      top: -85px;
      border-radius: 50%;
    }

    &__text {
      width: 80%;
      font-size: 20px;

      &--artist {
        width: 60%;
        font-size: 18px;
      }
    }
  }
`;

export default SkeletonPodcastStyled;
