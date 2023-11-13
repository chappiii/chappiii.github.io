import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsBoxArrowUpRight } from "react-icons/bs";
import PropTypes from "prop-types";

function ProjectCards(props) {
  return (
    <Card className="h-[420px] w-[300px] text-white hover:scale-110 transition-transform duration-300 rounded overflow-hidden shadow-lg border border-lime-600 bg-slate-950">
      <Card.Img
        src={props.imgPath}
        alt="card-img"
        className="w-64 object-cover object-center mx-5 my-4"
      />
      <Card.Body className="mb-6">
        <Card.Title className="font-bold text-xl mb-2">
          {props.title}
        </Card.Title>
        <Card.Text className="mb-6 mx-2">{props.description}</Card.Text>
        <Button
          href={props.demoLink}
          target="_blank"
          className="bg-slate-900 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <BsBoxArrowUpRight className="mr-2" />
          Preview
        </Button>
      </Card.Body>
    </Card>
  );
}

ProjectCards.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  demoLink: PropTypes.string,
};

export default ProjectCards;
