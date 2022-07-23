import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 0.4rem;
  overflow: hidden;
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2 );
  flex-direction: row;
  
  cursor: pointer;
  transition: 0.2s;

  /* 카드의 크기 */
  width: 270px;
  height: 400px;

  .card-image-wrapper {
    height: 250px; 
    overflow: hidden;
  }

  &:hover {
    transform: translateY(-0.7%); 
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);

    .card-img {
      transition: transform 0.5s ease;
      height: 250px; 
      transform: scale(1.05);
    }
  }

  .card-img {
    display: block;
    width: 100%;
    height: 100%; 
    object-fit: contain;
  }

  .card-content {
    padding: 1rem;
    overflow: hidden;


    .card-name {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;


      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }


    .card-price {
      margin-bottom: 0.5rem;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }


    .card-category {
      font-size: 1rem;
      line-height: 1.3;
      /* letter-spacing: 0.1rem; */
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap; 
    }
  }
`;

export default StyledCard;