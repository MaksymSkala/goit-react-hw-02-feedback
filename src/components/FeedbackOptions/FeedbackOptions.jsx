import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button className="button-class" onClick={() => onLeaveFeedback('good')}>Good</button>
      <button className="button-class" onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button className="button-class" onClick={() => onLeaveFeedback('bad')}>Bad</button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;