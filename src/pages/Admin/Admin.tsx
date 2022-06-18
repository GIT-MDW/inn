import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { createMultipleItems, createSingleItem, selectUser } from "../../features/user/userSlice";

export const Admin = () => {
  const { createSingleItem: singleItem, createMultipleItems: multipleItems } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Create Item</FormLabel>
        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
          <FormControlLabel
            value="single"
            control={<Radio />}
            label="Single Item"
            onChange={(e: React.BaseSyntheticEvent) => {
              dispatch(createSingleItem(e.currentTarget.checked));
              dispatch(createMultipleItems(!e.currentTarget.checked));
            }}
            checked={singleItem}
            disabled={multipleItems}
          />
          <FormControlLabel
            value="multiple"
            control={<Radio />}
            label="Multiple Items"
            onChange={(e: React.BaseSyntheticEvent) => {
              dispatch(createMultipleItems(e.currentTarget.checked));
              dispatch(createSingleItem(!e.currentTarget.checked));
            }}
            checked={multipleItems}
          />
        </RadioGroup>
      </FormControl>
      <br />
    </div>
  );
};
