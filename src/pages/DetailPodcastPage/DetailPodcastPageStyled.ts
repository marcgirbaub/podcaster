import styled from "@emotion/styled";

const DetailPodcastPageStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;

  .episodes {
    width: 700px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    &__number {
      width: 100%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      padding: 10px;
      font-size: 1.4rem;
    }

    &__list-container {
      width: 100%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      padding: 10px;
    }
  }

  .list {
    &__titles {
      display: flex;
      padding: 10px;
      align-items: center;
    }
  }

  .titles {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    &__title {
      flex: 3;
    }

    &__date {
      flex: 1;
      text-align: center;
    }

    &__duration {
      flex: 1;
      text-align: center;
    }
  }

  .episode {
    display: flex;
    padding: 10px;
    align-items: center;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
    border-top: 0.5px solid rgba(0, 0, 0, 0.2);

    &--odd {
      background-color: #f5f5f5;
    }

    &__name {
      flex: 3;
      color: #0085d1;
    }

    &__date {
      flex: 1;
      text-align: center;
    }

    &__duration {
      flex: 1;
      text-align: center;
    }
  }
`;

export default DetailPodcastPageStyled;
