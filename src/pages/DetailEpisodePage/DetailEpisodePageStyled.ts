import styled from "@emotion/styled";

const DetailEpisodePageStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;

  .episode {
    width: 700px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__audio {
      width: 100%;
      margin-top: 20px;
      height: 40px;
    }

    &__title {
      font-size: 1.3rem;
    }

    &__description {
      font-style: italic;
      white-space: pre-wrap;
      line-height: 20px;
    }
  }

  .link {
    color: #0085d1;
  }
`;

export default DetailEpisodePageStyled;
