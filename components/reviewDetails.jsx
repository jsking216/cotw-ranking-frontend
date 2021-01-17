import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const ReviewDetails = ({ review }) => {
  return (
  <Container>
    <Row>
      <Col>
        Intro: {review.BeginningReviewRating}
      </Col>
      <Col>
        Middle: {review.MiddleReviewRating}
      </Col>
      <Col>
        End: {review.EndingReviewRating}
      </Col>
    </Row>
    <Row>
      <Col>
        Hype: {review.HypeReviewRating}
      </Col>
      <Col>
        Variety: {review.VarietyReviewRating}
      </Col>
      <Col>
        Fun: {review.FunReviewRating}
      </Col>
    </Row>
  </Container>  
  );
};

export default ReviewDetails;
