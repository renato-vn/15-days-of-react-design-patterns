const Card = ({ children }) => {
  return <article className="card">{children}</article>;
};

const CardHeader = ({ children }) => (
  <div className="card-header">{children}</div>
);

const CardBody = ({ children }) => <div className="card-body">{children}</div>;

const CardFooter = ({ children }) => (
  <div className="card-footer">{children}</div>
);

const CardImage = ({ src, alt }) => (
  <img className="card-image" src={src} alt={alt} />
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;
