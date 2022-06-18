import { Breakpoint } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import "./Content.scss";

interface IContent {
  children: React.ReactNode;
  maxWidth: Breakpoint;
}

export const Content = ({ children, maxWidth }: IContent) => {
  return (
    <div className="content">
      <Container maxWidth={maxWidth}>{children}</Container>
    </div>
  );
};
