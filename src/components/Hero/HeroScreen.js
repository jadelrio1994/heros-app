import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId])

  if (!hero) {
    return <Redirect to='/' />
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  return (
    <div className="row mt-5">
      <div className="col-md">
        <img
          src={`../assets/heros/${heroId}.jpg`}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-md animate__animated animate__fadeIn">
        <h3 className="text-center mb-5">{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
          <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
          <li className="list-group-item"><b>First appearance: </b>{first_appearance}</li>
        </ul>
        {alter_ego !== characters && <h5 className="mt-5">Characters: </h5>}
        {alter_ego !== characters && <p className="card-text">{characters}</p>}

        <button
          className="btn btn-outline-info"
          onClick={handleReturn}
        >
          Return
        </button>

      </div>
    </div>
  )
}
