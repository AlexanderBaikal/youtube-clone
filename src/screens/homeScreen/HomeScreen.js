import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Video from "./../../components/video/Video";

function HomeScreen() {
  return (
    <Container>
      <CategoriesBar />
      <Row>
        {[...new Array(20).keys()].map((i) => (
          <Col lg={3} md={4} key={i}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeScreen;
