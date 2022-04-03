import React, { useState } from "react";
import { Grid, Select, MenuItem, Input } from "@material-ui/core";
import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { BarChart, Bar } from "recharts";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Widget from "../../../../components/Widget";
import { Typography } from "../../../../components/Wrappers";

export default function BigStat2(props) {
  const { product, total, color, registrations, bounce } = props;
  const classes = useStyles();
  const theme = useTheme();

  // local
  const [value, setValue] = useState("daily");

  return (
    <Widget
      header={
  
          <Grid container   alignItems="center" justifyContent="space-between">
     <div>  
          <Typography variant="h5">{product}</Typography>
          <div style={{marginTop:"16px" ,color:"rgb( 102, 103, 104)"}} >
           <Typography variant="p"   colorBrightness="secondary" >
           {registrations[value].value}
          </Typography></div>
   </div>     
    <div style={{display:"flex"}
    }>
    <Typography variant="h6" className={registrations[value].profit?classes.profitArrow:classes.profitArrowDanger}>{registrations[value].value}</Typography>

    
    </div>
          </Grid>

      }
  
    />




      
  
  );
}

