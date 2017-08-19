import React from 'react';
import SchoolCard from './SchoolCard'
import PropTypes, { object, array, func } from 'prop-types'
import './SchoolList.css'

const SchoolList = ({ data, cardClass, findAverage, clickedCard }) => {
  const schools = Object.keys(data);

  const schoolCards =  schools.map((school, i) =>
    <SchoolCard data={data[school]}
                 key={i}
                 cardClass={cardClass}
         findAverage={findAverage}
         clickedCard={clickedCard} /> );

  return (
    <div className='all-cards'>
      { schoolCards }
    </div>
  )
}

SchoolList.propTypes = {
  data: PropTypes.oneOfType([
    object,
    array
  ]),
  findAverage: func
}

export default SchoolList
