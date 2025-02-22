import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 5rem;
    margin-top: 0rem;
    color: var(--white);
    text-align: center;
  }

  .flip-card {
    background-color: transparent;
    width: 100px;
    height: 100px;
    perspective: 1000px; /* Enable 3D perspective */
   
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s; /* Smooth transition for flip */
    transform-style: preserve-3d; /* Ensure 3D transformation */
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg); /* Flip the card on hover */
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; /* Hide the back face of the card */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }

  .flip-card-front {
    background-color: #f0f0f0;
  }

  .flip-card-back {
    background-color: #007bff;
    color: white;
    transform: rotateY(180deg); /* Initially hide the back face */
  }

  .skill-icon {
    width: 80px;
    height: 80px;
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img {
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }

 
 @media (max-width: 960px) {
  display: flex; /* Change from block to flex */
  flex-direction: column;
  align-items: center;
  text-align: center;

  .hard-skills {
    justify-content: center;
    align-items: center; /* Ensure items center vertically */
    display: flex;
    flex-wrap: wrap; /* Ensure wrapping works */
    gap: 1.8rem;
  }

  .about-image {
    display: flex;
    justify-content: center;
    max-width: 100%;
    
    img {
      margin-top: 2rem;
      width: 100%;
      filter: grayscale(0);
      transition: filter 0.5s;
      &:hover {
        filter: grayscale(0);
      }
    }
  }
}

`;
