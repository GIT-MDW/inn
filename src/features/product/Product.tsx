import { Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import block from "bem-cn";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { permission } from "../../utils/permissions";
import { selectUser } from "../user/userSlice";
import "./Product.scss";
import { addProduct, IProduct, selectProducts } from "./productSlice";

const b = block("product-info");

export const Product = () => {
  const dispatch = useAppDispatch();
  const [firstDate, setFirstDate] = useState<Date | null | string>(null);
  const [secondDate, setSecondDate] = useState<Date | null | string>(null);
  const { createSingleItem, createMultipleItems } = useAppSelector(selectUser);
  const { products } = useAppSelector(selectProducts);
  const [product, setProduct] = useState<IProduct>({
    name: "",
    price: "",
    weight: "",
    startDate: firstDate,
    endDate: secondDate,
  });

  const handleChange = (prop: keyof IProduct) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [prop]: event.target.value });
  };

  const handleFirstChange = (newValue: Date | null) => {
    setFirstDate(newValue);
    setProduct({ ...product, startDate: newValue?.toString() });
  };
  const handleSecondChange = (newValue: Date | null) => {
    setSecondDate(newValue);
    setProduct({ ...product, endDate: newValue?.toString() });
  };
  return (
    <div className={b()}>
      <TextField
        label="Name"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        onChange={handleChange("name")}
      />
      <TextField
        label="Price"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        onChange={handleChange("price")}
      />
      <TextField
        label="Weight"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">kg</InputAdornment>,
        }}
        onChange={handleChange("weight")}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns} localeText={{ start: "Check-in", end: "Check-out" }}>
        <div style={{ display: "flex" }}>
          <DesktopDatePicker
            label="Start Date"
            inputFormat="MM/dd/yyyy"
            value={firstDate}
            onChange={handleFirstChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <DesktopDatePicker
            label="End Date"
            inputFormat="MM/dd/yyyy"
            value={secondDate}
            onChange={handleSecondChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
      </LocalizationProvider>
      <div className={b("btn")}>
        <Button
          variant="contained"
          disabled={permission(createSingleItem, createMultipleItems) || (createSingleItem && products.length > 0)}
          onClick={() => dispatch(addProduct(product))}
        >
          Create
        </Button>
        {!createSingleItem && !createMultipleItems && <p>Admin should give you permission</p>}
        {createSingleItem && products.length > 0 && <p>Ask admin to give you permission for multiple items</p>}
      </div>
    </div>
  );
};
