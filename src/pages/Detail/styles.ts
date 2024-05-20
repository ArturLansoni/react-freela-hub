import styled from "styled-components";

const FreelancerDetail = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  max-width: 720px;
  width: 100%;
  padding: 1rem 2rem;
  border-radius: 8px;
  background-color: var(--surface);
  > div {
    gap: 1rem;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  button {
    color: var(--background);
    font-weight: bold;
    border: 0;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    background-image: linear-gradient(
      90deg,
      var(--primary) 0%,
      var(--secondary) 100%
    );
  }
  a {
    color: var(--text);
    font-weight: bold;
    border: 0;
    padding: 0.5rem 1rem;
    text-align: center;
    margin-top: 0.5rem;
  }
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
  }
`;

const ProjectList = styled.div`
  padding: 1rem 0;
  border-radius: 8px;
  background-color: var(--surface);

  h3 {
    margin-bottom: 1rem;
  }
  h4 {
    font-weight: normal;
  }
  p {
    font-size: 16px;
  }
  > div {
    margin-bottom: 1rem;
  }
`;

const ReviewList = styled.div`
  padding: 1rem 0;
  border-radius: 8px;
  background-color: var(--surface);

  h3 {
    margin-bottom: 1rem;
  }
  h4 {
    font-weight: normal;
    margin-right: 1rem;
  }
  p {
    font-size: 16px;
  }

  > div {
    margin-bottom: 1rem;
  }
`;

export { FreelancerDetail, ProjectList, ReviewList };
