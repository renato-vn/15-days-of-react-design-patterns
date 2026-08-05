import Card from "./Card";
import Image from "./../../assets/image.png";

const CardDemo = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Image src={Image} alt="perezoso" />
        <h2>Perezoso Tierno</h2>
      </Card.Header>
      <Card.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quam
          ipsa, perferendis, mollitia cum culpa eaque hic fugiat enim suscipit
          quas. Nihil, aliquid ipsum? Eius error exercitationem similique unde
          mollitia?
        </p>
      </Card.Body>
      <Card.Footer>
        <button>See more</button>
        <button>Add to Favorites</button>
      </Card.Footer>
    </Card>
  );
};

export default CardDemo;
