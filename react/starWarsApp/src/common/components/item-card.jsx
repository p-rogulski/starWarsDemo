import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const MediaControlCard = ({ title, children,className }) => (
    <Card className={`card ${className}`}>
      <div className="card__content">
        <CardContent>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {children}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );

export default styled(MediaControlCard)`
  width:40vw;
  text-align:center;
  margin-top:15px;
`;
