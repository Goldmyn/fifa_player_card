import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Import necessary Bootstrap components
import Player from "./Player.js";
import PLAYERS from "../players.js";

// Define the PlayersList component
const PlayerList = () => {
  return (
    <Container>
      <h2 className="mb-4 text-center fw-bold text-light">FIFA PLAYER CARD</h2>
      <Row>
        {PLAYERS.map((item, index) => (
          <Col sm={12} md={6} lg={4} key={index} className="mb-4">
            <Player {...item} /> {/* Spread operator to pass player props */}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayerList;
