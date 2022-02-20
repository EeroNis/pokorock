import React from 'react';
import './TuoteKortti.css';
import styled from 'styled-components';

const PokoKortti = ({ kuva, teksti, hinta, otsikko }) => {
  return (
    <Wrapper>
      <div className='PokoKorttiContent'>
        <div className='imgContainer'>
          <img src={kuva} alt='' />
        </div>
        <div className='tiedotContainer'>
          <div className='otsikkoContainer'>
            <h2>{otsikko}</h2>
          </div>
          <div className='tekstiContainer'>
            <p>{teksti}</p>
          </div>
          <div className='hintajabtnContainer'>
            <h3>{hinta}</h3>
            <button>Osta nyt</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1000px;
  width: 90%;
  border: 4px solid black;
  margin: 50px auto;
  border-radius: 20px;
  .PokoKorttiContent {
    background-color: whitesmoke;
    border-radius: 17px;

    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .imgContainer {
    display: flex;
    align-items: center;
    max-width: 300px;
    width: 30%;
    img {
      border-radius: 14px;
      aspect-ratio: 1/1;
      width: 100%;
    }
  }
  .tiedotContainer {
    border-radius: 20px;
    background-color: whitesmoke;
    min-width: 400px;
    width: 70%;
  }

  .otsikkoContainer {
    width: 100%;
    display: flex;
    align-items: center;
    height: 50px;
    justify-content: center;
  }
  .tekstiContainer {
    display: flex;
    align-items: center;
    padding: 20px;
    text-align: center;
    height: calc(100% - 100px);
  }
  .hintajabtnContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    margin-bottom: 10px;
    height: 50px;
    button {
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      color: white;
      background: #e52122;
      cursor: pointer;
      :hover {
        background: #b2191a;
      }
    }
  }
  @media only screen and (max-width: 650px) {
    max-width: 400px;
    width: 90%;
    .PokoKorttiContent {
      width: 100%;
    }
    .imgContainer {
      width: 100%;
      max-width: 100%;
      img {
        aspect-ratio: 1/1;
        width: 100%;
        margin: auto;
      }
    }
    .tiedotContainer {
      padding: 0 10px;
      min-width: 250px;
      width: 100%;
      margin: auto;
    }
  }
`;

export default PokoKortti;
