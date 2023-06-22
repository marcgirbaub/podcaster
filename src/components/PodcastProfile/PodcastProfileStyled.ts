import styled from "@emotion/styled";

const PodcastProfileStyled = styled.div`
  padding: 20px;
  max-width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .profile {
    &__image {
      border-radius: 4px;
      object-fit: contain;

      &-container {
        display: flex;
        justify-content: center;
      }
    }

    &__info {
      &-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        padding: 20px 0;
        margin: 20px 0;
      }
    }

    &__artist {
      font-style: italic;
    }

    &__description {
      font-style: italic;
      word-wrap: break-word;

      &-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        height: 100%;
      }
    }
  }
`;

export default PodcastProfileStyled;
