import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns for text and image */
  gap: 4rem; /* Space between text and image */
  align-items: center; /* Vertically center align items */

  .about-content {
    max-width: 600px; /* Limit text width for better readability */
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0;
    color: var(--green);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    line-height: 1.6; /* Improve readability */
  }

  .about-image {
    text-align: center;
    marginbottom:10px;

    img {
      width: 100%;
      max-width: 400px;
      border-radius: 1.5rem;
      filter: grayscale(0);
      transition: filter 0.5s;

      &:hover {
        filter: grayscale(100%);
      }
    }
  }

  @media only screen and (max-width: 960px) {
    grid-template-columns: 1fr; /* Stack content on smaller screens */
    text-align: center;

    .about-content {
      max-width: 100%; /* Full width for text on smaller screens */
    }

    .about-image {
      order: -1; /* Move image above text on smaller screens */
      margin-bottom: 2rem;

      img {
        margin-top: 0;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .about-image img {
      filter: grayscale(0); /* Disable grayscale on small screens */
      &:hover {
        filter: grayscale(0);
      }
    }
  }
`;