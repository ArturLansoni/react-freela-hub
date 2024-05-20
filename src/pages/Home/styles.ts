import styled from "styled-components";

const FreelancerList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  list-style: none;
  max-width: 720px;
  margin: 0 auto;

  li {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 2rem;
    border-radius: 8px;
    background-color: var(--surface);

    > div {
      gap: 1rem;
    }

    h2 {
      font-size: 24px;
      font-weight: bold;
      white-space: nowrap;
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

    img {
      width: 4rem;
      height: 4rem;
      border-radius: 100%;
    }
  }
`;

const SearchArea = styled.div<{ hideButton: boolean }>`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--surface);
  margin: 4rem 0 2rem 0;
  max-width: 720px;
  width: 100%;
  background-color: var(--surface);

  input {
    border: 0;
    background: none;
    width: 100%;
    color: var(--text);
  }
  button {
    display: ${(props) => (props.hideButton ? "none" : "block")};
    border: 0;
    background: none;
    color: var(--text);
    font-weight: bold;
  }
`;

export { FreelancerList, SearchArea };
