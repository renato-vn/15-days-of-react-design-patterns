const Card = ({ imageUrl, title, body, secondaryAction, primaryAction }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img className="card-image" src={imageUrl} alt="card-image" />
        <h2>{title}</h2>
      </div>
      <div className="card-body">{body}</div>
      <div className="card-footer">
        {secondaryAction}
        {primaryAction}
      </div>
    </div>
  );
};

export default Card;
