import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      <Card style={{ width: "19rem", textAlign: "center" }}>
        <Card.Img
          variant="top"
          src={imageUrl}
          alt={name}
          style={{ height: "350px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title className="fw-bold">{name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{team}</ListGroup.Item>
          <ListGroup.Item>{nationality}</ListGroup.Item>
          <ListGroup.Item>
            <strong>Jersey Number:</strong> {jerseyNumber}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Age:</strong> {age}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

// Defining default props for the Player component
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: "0",
  age: "N/A",
  imageUrl: "https://via.placeholder.com/150", // Default image placeholder
};

export default Player;
