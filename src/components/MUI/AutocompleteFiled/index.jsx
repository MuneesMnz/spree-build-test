import { Autocomplete, TextField } from "@mui/material";
import { CaretDown } from "@phosphor-icons/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const AutocompleteField = ({
  dataList,
  label,
  value,
  setValue,
  placeholder,
}) => {
  const theme = useSelector((state) => state.theme.theme);

  const handleChange = (e, value) => {
    setValue(value);
  };
  return (
    <div className="relative">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={dataList}
        value={value}
        onChange={handleChange}
        sx={{
          width: "100%",
          padding: 0,
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            variant="standard"
            placeholder={placeholder}
            InputLabelProps={{
              shrink: true,
              sx: {
                "&.Mui-focused": {
                  color: "#ffffff99",
                },
                "& .MuiInputLabel-root": {
                  color: "#ffffff99",
                },
              },
            }}
            sx={{
              "& .MuiInputBase-input::placeholder": {
                color: "#ffffff99",
                fontWeight: "200",
              },
              "& .MuiInputBase-root": {
                paddingRight: 0,
              },
              "& .MuiInput-underline": {
                borderBottom: "1px solid #ffffff99",
              },
              // "& .MuiInput-underline:before": {
              //   borderBottom: `1px solid rgba(0, 0, 0, 0.42)`,
              // },
              "& .MuiInput-underline:after": {
                borderBottom: "1px solid #ffffff99",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "transparent",
              },
              "& .MuiInput-underline.Mui-focused:after": {
                borderBottomColor: "transparent",
              },
              "& .MuiInput-underline.Mui-error:after": {
                borderBottomColor: "red",
              },
              "& .MuiInput-underline.Mui-focused:before": {
                borderBottomColor: "transparent",
                borderBottomWidth: "0.5px",
              },
              "& .MuiAutocomplete-clearIndicator, & .MuiAutocomplete-popupIndicator":
                {
                  display: "none",
                },
            }}
          />
        )}
      />
      <div className="absolute right-0 top-5">
        <CaretDown size={18} />
      </div>
    </div>
  );
};

export default AutocompleteField;
