import React from 'react';
import SchoolCard from './SchoolCard'
import PropTypes, { object, array, func, string } from 'prop-types'
import './SchoolList.css'

const SchoolList = ({ cardData, cardClass, findAverage, clickedCard }) => {
  const schools = Object.keys(cardData);

  const schoolCards =  schools.map((school, i) =>
    <SchoolCard data={cardData[school]}
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
  cardClass: string,
  findAverage: func,
  clickedCard: func,
}

export default SchoolList
