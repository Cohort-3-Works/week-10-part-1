import PropTypes from "prop-types";

// creating a card component for understanding children

export const Card = ({ children }) => {
  return (
    <div
      style={{
        padding: 10,
        margin: 10,
        backgroundColor: "#b2babb",
        borderRadius: 10,
      }}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
};
