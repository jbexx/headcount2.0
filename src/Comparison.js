import React from "react";
import SchoolCard from "./SchoolCard";
import CompareCard from "./CompareCard";
import { array, func, string } from 'prop-types'
import './Comparison.css'

const Comparison = ({ cardData, cardClass, findAverage, districtRatio }) => {
  const schoolCards = cardData.map((school, i) =>
    <SchoolCard
      data={school}
      cardClass={cardClass}
      key={i}
      findAverage={findAverage}
    />
  );

  return (
    <div className="compare-cards">
      {schoolCards}
      <CompareCard cardData={cardData} districtRatio={districtRatio} />
    </div>
  );
};

export default Comparison;

Comparison.propTypes = {
  data: array,
  cardClass: string,
  findAverage: func,
  districtRatio: func
}
