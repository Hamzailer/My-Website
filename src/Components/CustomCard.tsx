import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CustomCard = (props: any) => {
  return (
    <div className="" style={{ padding: "1.75rem" }}>
      <Card style={{ width: "20.5rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.content}</Card.Text>
          <div className="col text-center">
            <Button className="mx-auto" variant="primary" href={props.link}>
              Check It Out
            </Button>
          </div>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
};

export default CustomCard;
