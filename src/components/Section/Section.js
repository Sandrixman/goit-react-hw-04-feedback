import PropTypes from 'prop-types';
import { Div } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Div>
      <h1>{title}</h1>
      {children}
    </Div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
