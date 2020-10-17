import { Divider, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";

export const GameInformationItem = ({
  title,
  valueSelector,
  showDivider,
}: {
  title: string;
  valueSelector: (state: AppState) => string | number;
  showDivider: boolean;
}) => {
  const value = useSelector(valueSelector);
  return (
    <>
      <ListItem button>
        <ListItemText primary={`${title}: ${value}`} />
      </ListItem>
      {showDivider && <Divider />}
    </>
  );
};

export default GameInformationItem;
