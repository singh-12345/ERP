import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const cards = [
  { title: 'Total Sales', value: '$62,425', subtitle: '50% Increase', color: 'warning' },
  { title: 'Total Purchases', value: '$25,187', subtitle: '30% Decrease', color: 'info' },
  { title: 'Total Paid', value: '$10,600', subtitle: '15% Increase', color: 'primary' },
  { title: 'Profits', value: '$30,860', subtitle: '45% Increase', color: 'success' },
];

const SalesCards = () => (
  <Row>
    {cards.map((card, idx) => (
      <Col md={3} key={idx}>
        <Card className={`text-${card.color} mb-3 shadow-sm`}>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <h4>{card.value}</h4>
            <small>{card.subtitle} from last month</small>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

export default SalesCards;
