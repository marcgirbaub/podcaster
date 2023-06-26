import styled from "@emotion/styled";

const SkeletonPodcastListStyled = styled.div`
  display: grid;
  justify-items: center;
  gap: 40px;
  grid-column-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
`;

export default SkeletonPodcastListStyled;
