import { useState } from "react";
import "./badge.css";

export const Badge = ({ text, type }) => {
  return <p className={`badge ${type}`}>{text}</p>;
};
