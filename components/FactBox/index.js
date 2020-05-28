import React from "react";

import { Container, Value, Label } from "./styles";

export default function FactBox({ label, value, unit }) {
  return (
    <Container>
      <Value>{getValue(value, unit)}</Value>
      <Label>{label}</Label>
    </Container>
  );
}

function getValue(value, unit) {
  if (!isNaN(parseFloat(value)) && isFinite(value)) {
    return `${parseFloat(value).toFixed(1)} ${unit}`;
  }

  return value;
}
