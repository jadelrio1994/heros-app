import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../Hero/HeroCard';
import { getHerosMyName } from '../../selectors/getHerosByName';

export const SearchScreen = ({ history }) => {

  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const [{ search }, handleInputChange, reset] = useForm({
    search: q
  });

  const herosFiltered = useMemo(() => getHerosMyName(search), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${search}`)
  }


  return (
    <div className="mt-5 animate__animated animated__fadeIn ">
      <div className="row mt-3">
        <div className="col-12">
          <h4>Search form</h4>
          <hr />
          <form className="row" onSubmit={handleSearch} >
            <div className="col-10">
              <input
                type="text"
                name="search"
                autoComplete="off"
                className="form-control"
                placeholder="Find your hero"
                value={search}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-2">
              <button
                type="submit"
                className="btn btn-primary btn-block"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {
          q !== ''
          &&
          <div className="col-12 mt-3">
            <h4>Results</h4>
            <hr />
            <div className="card-columns">
              {
                // console.log(herosFiltered)
                herosFiltered.map(hero => (
                  <HeroCard
                    key={hero.id}
                    {...hero}
                  />
                ))
              }
            </div>
          </div>
        }
        {
          (q !== '' && herosFiltered.length === 0)
          &&
          <div className="alert alert-danger w-100">
            No existen con ese nombre
          </div>

        }

      </div>
    </div>
  )
}
