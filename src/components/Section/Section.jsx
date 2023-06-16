import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      <div>{children}</div>
    </>
  );
};

Section.protoTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
