import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Button,
  Divider,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  useRouteMatch,
} from "react-router-dom";

const AddJob = () => {
  const classes = useStyles();

  const validationSchema = yup.object().shape({
    Username: yup.string().required("لطفا نام کاربر را وارد کنید"),
    Beehive: yup.string().required("لطفا نام زنبورستان را وارد کنید"),
    Hive: yup.string().required("لطفا نام کندو را وارد کنید"),
    // Priority: yup.string().required("لطفا الویت را مشخص کنید"),
    // Reminder:yup.string().required("لطفا الویت را مشخص کنید"),
    jobTitle: yup.string().required("لطفا عنوان کار خود را وارد کنید"),
    email: yup.string().email("لطفا ایمیل معتبر وارد کنید"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    alert(JSON.stringify(data, null, 2));
    // history.push("/login/step2")
  };
  let { path, url } = useRouteMatch();

  const options = [
    { label: "همه", value: "همه" },
    { label: "تغذیه زنبور", value: "تغذیه زنبور" },
    { label: "برداشت عسل", value: "برداشت عسل" },
    { label: "بیماری زنبور", value: "بیماری زنبور" },
  ];
  return (
    <Paper>
      <Box px={3} py={2} className={classes.root}>
        <Typography
          variant="h6"
          align="center"
          margin="dense"
          color="secondary"
          style={{ fontWeight: "bold" }}
        >
          کار جدید
        </Typography>
        <Divider style={{ marginTop: "8px" }} />

        <Grid container spacing={1} className={classes.container}>
          <div
            style={{ display: "flex", width: "100%" }}
          >
            <Grid item xs={12} sm={12} className={classes.Select}>
              <div className={classes.input}>
                <label className={classes.label}>نام کاربر</label>
                <Select
                  className={classes.inputSelect}
                  required
                  variant="outlined"
                  {...register("Username")}
                  error={errors.Username ? true : false}

                  // onChange={(e) =>
                  //   setValue("select", e.target.value, { shouldValidate: true })
                  // } // Using setValue
                >
                  {options?.map((option) => {
                    return (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label ?? option.value}
                      </MenuItem>
                    );
                  })}
                </Select>
              </div>
              {/* {errors.select && <p>{errors.select.message}</p>} */}
              <Typography
                variant="inherit"
                color="textSecondary"
                style={{ color: "red" }}
              >
                {errors.Username?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} className={classes.inputText}>
              <div className={classes.input}>
                <label className={classes.label}>عنوان کار </label>
                <TextField
                  className={classes.TextField}
                  required
                  id="jobTitle"
                  name="jobTitle"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  {...register("jobTitle")}
                  error={errors.jobTitle ? true : false}
                />
              </div>
              <Typography
                variant="inherit"
                color="textSecondary"
                style={{ color: "red" }}
              >
                {errors.jobTitle?.message}
              </Typography>
            </Grid>
          </div>
          <Divider style={{ marginTop: "8px", width: "100%" }} />

          <div
            style={{ width: "100%" }}
          >
            <div>
              <Typography
                variant="h6"
                align="center"
                margin="dense"
                color="primary"
                style={{ fontWeight: "bold", fontSize: "1rem",marginTop:"8px"}}
              >
                دسته بندی
              </Typography>
            </div>
            <div     style={{ display: "flex", width: "100%" }}>
              <Grid item xs={12} sm={12} className={classes.Select}>
                <div className={classes.input}>
                  <label className={classes.label}>زنبورستان</label>
                  <Select
                    className={classes.inputSelect}
                    required
                    variant="outlined"
                    {...register("Beehive")}
                    error={errors.Beehive ? true : false}

                    // onChange={(e) =>
                    //   setValue("select", e.target.value, { shouldValidate: true })
                    // } // Using setValue
                  >
                    {options?.map((option) => {
                      return (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label ?? option.value}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </div>
                {/* {errors.select && <p>{errors.select.message}</p>} */}
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  style={{ color: "red" }}
                >
                  {errors.Beehive?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12} className={classes.Select}>
                <div className={classes.input}>
                  <label className={classes.label}>کندو</label>
                  <Select
                    className={classes.inputSelect}
                    required
                    variant="outlined"
                    {...register("Hive")}
                    error={errors.Hive ? true : false}

                    // onChange={(e) =>
                    //   setValue("select", e.target.value, { shouldValidate: true })
                    // } // Using setValue
                  >
                    {options?.map((option) => {
                      return (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label ?? option.value}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </div>
                {/* {errors.select && <p>{errors.select.message}</p>} */}
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  style={{ color: "red" }}
                >
                  {errors.Hive?.message}
                </Typography>
              </Grid>
            </div>
          </div>
          <Divider style={{ marginTop: "8px", width: "100%" }} />

          <div
            style={{ width: "100%" }}
          >
            <div>
              <Typography
                variant="h6"
                align="center"
                margin="dense"
                color="primary"
                style={{ fontWeight: "bold", fontSize: "1rem",marginTop:"8px"}}
              >
                دسته بندی
              </Typography>
            </div>
            <div     style={{ display: "flex", width: "100%" }}>
              <Grid item xs={12} sm={12} className={classes.Select}>
                <div className={classes.input}>
                  <label className={classes.label}>زنبورستان</label>
                  <Select
                    className={classes.inputSelect}
                    required
                    variant="outlined"
                    {...register("Beehive")}
                    error={errors.Beehive ? true : false}

                    // onChange={(e) =>
                    //   setValue("select", e.target.value, { shouldValidate: true })
                    // } // Using setValue
                  >
                    {options?.map((option) => {
                      return (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label ?? option.value}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </div>
                {/* {errors.select && <p>{errors.select.message}</p>} */}
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  style={{ color: "red" }}
                >
                  {errors.Beehive?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12} className={classes.Select}>
                <div className={classes.input}>
                  <label className={classes.label}>کندو</label>
                  <Select
                    className={classes.inputSelect}
                    required
                    variant="outlined"
                    {...register("Hive")}
                    error={errors.Hive ? true : false}

                    // onChange={(e) =>
                    //   setValue("select", e.target.value, { shouldValidate: true })
                    // } // Using setValue
                  >
                    {options?.map((option) => {
                      return (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label ?? option.value}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </div>
                {/* {errors.select && <p>{errors.select.message}</p>} */}
                <Typography
                  variant="inherit"
                  color="textSecondary"
                  style={{ color: "red" }}
                >
                  {errors.Hive?.message}
                </Typography>
              </Grid>
            </div>
          </div>
          <Divider style={{ marginTop: "8px", width: "100%" }} />
        </Grid>

        <Box mt={8} style={{ width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" className={classes.Button2}>
              انصراف
            </Button>

            <Button
              variant="contained"
              className={classes.Button1}
              onClick={handleSubmit(onSubmit)}
            >
              افزودن
            </Button>
          </div>
        </Box>
      </Box>
    </Paper>
  );
};
export default AddJob;
