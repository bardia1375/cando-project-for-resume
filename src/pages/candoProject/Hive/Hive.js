
import {
  Box,
  Breadcrumbs,
  Button,
  Dialog,
  Fade,
  IconButton,
  MenuItem,
  Modal,
  Popover,
  Popper,
  Select,
  Typography,
} from "@material-ui/core";
import React, { Children, useEffect, useState } from "react";
import PageTitle from "../../../components/PageTitle/PageTitle";
import axios from "axios";
import useStyles from "./styles";
import "./Hive.css";
import XLSX from "xlsx";
import { Delete, Edit, Edit as EditIcon, MoreVertOutlined, NavigateBefore, NavigateNext, Share } from "@material-ui/icons";
import { Link } from "react-router-dom";
import MaterialTable, { MTableToolbar } from "material-table";
import CompanyAddList from "../../../components/Form/ApiaryList/ApiaryAddList";
import SearchBar from "material-ui-search-bar";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "../../../Iran-Sans-normal";
import ApiaryAddList from "../../../components/Form/ApiaryList/ApiaryAddList";
import { makeStyles } from "@material-ui/styles";
import Title from "../../../components/Typography/Title/Title";
import { useLocation } from 'react-router-dom'

function  Hive() {
  const location = useLocation()
  // window.localStorage.getItem(location.state.rowDatas)
  // const rowDatas= window.localStorage.setItem()
  // console.log("location",location)
  // console.log("rowDatanew",rowDatas)
  const [open, setOpen] = useState(false);
  const [downloadOpen, setdownloadOpen] = useState(false);

  const [selectedRows, setSelectedRows] = useState();

  const [toolbar, setToolbar] = useState(false);
  const[Hive,setHive]=useState("all")
  const [scroll, setScroll] = useState('paper');
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);

    setScroll(scrollType);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setdownloadOpen(false);
  };
  
  useEffect(()=>{
    console.log("Hive",Hive)
  },[Hive])

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow:'scroll',
    width: 400,
    bgcolor: "background.paper",
    borderRadius:"16px",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const [Company, setCompany] = useState([
    {
      id: "1",
      name: "?????????? 1",
      HiveType: "?????? ????????",
      RaceQueen: "???????? ????????",
      date: "23/09/1400",
      status: 1,
      Job: 1,
      Sick: 1,
      Queen: 1,
    },
    {
      id: "2",
      name: "?????????? 2",
      HiveType: "?????? ????????",
      RaceQueen: "???????? ????????",
      date: "23/09/1400",
      status: 0,
      Job: 0,
      Sick: 0,
      Queen: 0,
    },
  ]);
  // const useStyles = makeStyles({
  //   Button: {
  //     margin: "8px 0px",
  //     fontFamily: "Shabnam",
  //     cursor: "pointer",
  //     width: "5%",
  //   },
  // });
  
  const classes = useStyles();

  console.log(Company);
  const columns = [

    {
      title: "?????? ????????",
      field: "name",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },

      render: (rowData) => {
        console.log("rowData", rowData);
        return (
          <Link
            to={`/app/ApiaryList/Beehive/Hive/${rowData.id}`}
            style={{ display: "flex",textDecoration:"none" ,color:"black",cursor:"pointer"}}
          >
            {rowData.name}
          </Link>
        );
      },
    },

    {
      title: " ?????? ????????",
      field: "HiveType",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return <p className="description">{rowData.HiveType}</p>;
      },
    },
    {
      title: " ???????? ????????",
      field: "RaceQueen",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return <p className="description">{rowData.RaceQueen}</p>;
      },
    },
    {
      title: "?????????? ??????????",
      field: "date",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return <p className="description">{rowData.date}</p>;
      },
    },
    {
      title: "?????????? ??????",
      field: "status",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return (
          <div className={rowData.status ? "statusActive" : "statusDeactive"}>
            {rowData.status ? "????????" : "??????????????"}
          </div>
        );
      },
    },
    {
      title: "??????",
      field: "Job",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return (
          <div className={rowData.Job ? "jobActive" : "jobDeactive"}>
            {rowData.Job ? (
              <img src="/assets/checklist-svgrepo-com-1.svg" />
            ) : (
              <img src="/assets/checklist-svgrepo-com.svg" />
            )}
          </div>
        );
      },
    },
    {
      title: "????????????",
      field: "Sick",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return (
          <div className={rowData.Job ? "sickActive" : "sickDeactive"}>
            {rowData.Job ? (
              <img src="/assets/sickness-svgrepo-com-1.svg" />
            ) : (
              <img src="/assets/sickness-svgrepo-com-2.svg" />
            )}
          </div>
        );
      },
    },
    {
      title: "????????",
      field: "Queen",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return (
          <div className={rowData.Job ? "jobActive" : "jobDeactive"}>
            {rowData.Job ? (
              <img src="/assets/Component 24 ??? 6.svg" />
            ) : (
              <img src="/assets/Component 24 ??? 5.svg" />
            )}
          </div>
        );
      },
    },
    {
      title: "????????????",
      field: "action",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return (
          // <Link to={`/app/CompanyList/${rowData.id}`}>
          <div>
            <PopupState variant="popover" popupId="demo-popup-popover" style={{cursor:"pointer"}}>
              {(popupState) => (
                <div>
                  <MoreVertOutlined variant="contained" {...bindTrigger(popupState)} style={{cursor:"pointer"}}/>

                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <div style={{ borderRadius: " 16px", padding: " 16px" }}>
                      <div
                      
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Edit style={{ marginLeft: "16px" }} />
                        ????????????
                      </div>
                      <hr
                        style={{
                          borderTop: "1px solid rgb( 240, 240, 240)",
                          height: "2px",
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Edit style={{ marginLeft: "16px" }} />
                        ???????????? ??????????
                      </div>
                      <hr
                        style={{
                          borderTop: "1px solid rgb( 240, 240, 240)",
                          height: "2px",
                        }}
                      />
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              cursor:"pointer"

                        
                            }}
                          >
                            <img src="/assets/move-svgrepo-com.svg" style={{ margin: "0 0px 0 24px"}} />
                            ????????????
                          </div>
                          <hr
                            style={{
                              borderTop: "1px solid rgb( 240, 240, 240)",
                              height: "2px",
                            }}
                          />
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              color:"red",
                              justifyContent: "flex-start",
                              cursor:"pointer"

                            }}
                            onClick={() => onRowDelete(rowData)}
                          >
                            <img src="/assets/trash-svgrepo-com-2.svg" style={{ margin: "0 0px 0 24px" }} />
                            ??????
                          </div>
                    </div>
                  </Popover>
                </div>
              )}
            </PopupState>
          </div>
        );
      },
    },
  ];

  //downloadExcel
  const downloadFile = () => {
    setdownloadOpen(true);
  };
  const downloadExcel = () => {
    const newData = Company.map((row) => {
      delete row.tableData;
      return row;
    });
    const workSheet = XLSX.utils.json_to_sheet(newData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "students");
    //Buffer
    let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
    //Binary string
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
    //Download
    XLSX.writeFile(workBook, "StudentsData.xlsx");
  };
  const [searched, setSearched] = useState();

  const requestSearch = (searchedVal) => {
    const filteredRows = Company.map((rows) => {
      return rows.name;
      // console.log("rows.title",rows)
    }).filter((row) => {
      return row.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setCompany(filteredRows);
    console.log("Company", Company);
    console.log("filteredRows", filteredRows);
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };
  const handleBulkDelete = async() => {
    if(window.confirm("?????? ???? ?????? ?????? ???????? ?????????????? ????????????")){
      // const response = await axios.delete(`https://sdfsdf/${selectedRows[0].id}`)
      console.log("selectedRows",selectedRows[0].id)
   
    const updatedData = Company.filter((row) => !selectedRows.includes(row));
    setCompany(updatedData);
  }};

  const onRowDelete= async(rowData) => {
    if(window.confirm("?????? ???? ?????? ?????? ???????? ?????????????? ????????????")){
      // const response = await axios.delete(`https://sdfsdf/${rowData.id}`)
      console.log("rowData",rowData.id)
    const updatedData=Company.filter((row)=>![rowData].includes(row))
    setCompany(updatedData);
  }};

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("???????????? ??????????????????", 20, 10);
    doc.autoTable({
      theme: "grid",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: Company,
    });
    doc.setFont('Iran-Sans'); // set custom font
    doc.save("table.pdf");
  };
  const add = () => {
    return console.log("click");
  };
  
  const breadcrumbs = [

    <Link
      to="/app/ApiaryList"
      key="1"
      style={{textDecoration:"none",cursor:"pointer"}}
    >
          <Title key="2" title="?????????????????? "/>

    </Link>,
    <Title key="2" title="?????????????????? ??"/>


  ];
  return (
    
    <div>
      <Breadcrumbs 
        separator={<NavigateBefore fontSize="large" style={{color:"rgb(227, 156, 0)"}} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <MaterialTable
        localization={{
          toolbar: {
            searchPlaceholder: "dfsdfsdf",
          },
        }}
        title=""
        style={{ borderRadius: "25px",marginTop:"32px" }}
        data={Company}
        columns={columns}
        onSelectionChange={(rows) => setSelectedRows(rows)}
        localization={{
          body: {
            editRow: { deleteText: "?????? ???????????????? ?????? ?????? ???? ?????? ??????????" },
          },
          pagination: {
            labelDisplayedRows: "{from}-{to} ???? {count}",
            labelRowsSelect: '?????????? ????????',
            labelRowsPerPage: '??',
            firstAriaLabel: '?????????? ????????',
     
            previousAriaLabel: '???????? ??????',
     
            nextAriaLabel: '???????? ??????',
            lastAriaLabel: '?????????? ????????',
          },
          toolbar: {
            nRowsSelected: "{0} ???????? ???????????? ????",
            searchPlaceholder: "?????????? ????",
          },
          header: {
            actions: "????????????",
          },
          body: {
            emptyDataSourceMessage: "?????????? ?????? ?????????? ???????? ??????????.",
            filterRow: {
              filterTooltip: "??????????",
            },
          },
        }}
        options={{
          
          columnsButton: true,
          actionsColumnIndex: -1,
          addRowPosition: "last",
          rowStyle: {
            fontWeight: 600,
            textAlign: "right",
          },
          headerStyle: {
            fontWeight: 600,
            color: "rgb( 102, 103 ,104)",
          },
          selection: true,
          selectionProps: (rowData) => ({
            // checked: Company?.includes(rowData.value) ? true: false,
            onClick: () => {
              console.log("clicked asdasda");
              setToolbar(true);
            },
          }),
          search: true,
          searchFieldAlignment:"left",
          searchFieldStyle: {
            borderTop: "2px solid  rgb( 240 ,240, 240)",
            borderRight: "2px solid  rgb( 240 ,240, 240)",
            borderLeft: "2px solid  rgb( 240 ,240, 240)",
            borderBottom: "none",
            padding: "4px",
            borderRadius: "8px",
   
          },
          // filtering: true,
        }}


      



        components={{
          // Toolbar: (props) => (
          //   <>
          //     <div
          //       style={{
          //         direction: "rtl",
          //         display: "flex",
          //         justifyContent: "space-between",
          //         alignItems: "center",
          //         padding: "16px  32px  0px",
          //       }}
          //     >
          //       <div
          //         style={{
          //           display: "flex",
          //           alignItems: "center",
          //           justifyContent: "center",
          //         }}
          //       >
          //         <SearchBar
          //           style={{
          //             direction: "ltr",
          //             border: "1px solid red",
          //             width: "100%",
          //             borderRadius: "8px",
          //           }}
          //           value={searched}
          //           onChange={(searchVal) => requestSearch(searchVal)}
          //           onCancelSearch={() => cancelSearch()}
          //         />
          //         {/* <MTableToolbar {...props} /> */}
          //         <div
          //           onClick={handleOpen}
          //           style={{
          //             backgroundColor: "rgb( 227, 156, 0)",
          //             marginRight: "32px",
          //             color: "#000",
          //             padding: "8px",
          //             display: "flex",
          //             alignItems: "center",
          //             justifyContent: "center",
          //             borderRadius: "8px",
          //           }}
          //         >
          //           <img src="/assets/Group 182.svg" />
          //         </div>
          //       </div>
          //       <div
          //         onClick={downloadFile}
          //         style={{
          //           backgroundColor: "black",
          //           cursor: "pointer",
          //           color: "white",
          //           display: "flex",
          //           alignItems: "center",
          //           justifyContent: "center",
          //           borderRadius: "8px",
          //           padding: "8px",
          //           // marginLeft: "32px",
          //         }}
          //       >
          //         <span>????????????</span>
          //         <img
          //           src="/assets/download-arrow-svgrepo-com.svg"
          //           style={{ marginRight: "8px" }}
          //         />
          //       </div>
          //     </div>
          //     <hr
          //       style={{
          //         borderTop: "1px solid rgb( 240, 240, 240)",
          //         height: "2px",
          //       }}
          //     />
          //     {toolbar ? (
          //       <MTableToolbar {...props}>{console.log(props)}</MTableToolbar>
          //     ) : null}
          //   </>
          // ),
        }}
        actions={[
          {
            icon: () => <Select
               labelId="demo-simple-select-label"
               variant="outlined"

               Id='demo-simple-select'
               style={{width:100}}
               value={Hive}
               className={classes.inputSelect}
               onChange={(e)=>setHive(e.target.value)}>
                 <MenuItem value={"all"}><em>All</em></MenuItem>
                 <MenuItem value={2019}>2019</MenuItem>
                 <MenuItem value={2020}>2020</MenuItem>
                 <MenuItem value={2021}>2021</MenuItem>
            </Select>,

            tooltip: "????????????",
            isFreeAction: true,
          },
          {
            icon: () => (
              


              
              <div>
                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                  <MoreVertOutlined variant="contained" {...bindTrigger(popupState)} style={{cursor:"pointer"}}/>

                      
                      <Popover
                    

                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                      >
                        <div
                          style={{ borderRadius: " 16px", padding: " 16px" }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              cursor:"pointer"
                            }}
                          >
                            <Edit style={{ marginLeft: "16px" }} />
                            ????????????
                          </div>
                          <hr
                            style={{
                              borderTop: "1px solid rgb( 240, 240, 240)",
                              height: "2px",
                              
                            }}
                          />
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              cursor:"pointer"

                            }}
                          >
                            <Share style={{ marginLeft: "16px" }} />
                            ???????????? ??????????
                          </div>
                          <hr
                            style={{
                              borderTop: "1px solid rgb( 240, 240, 240)",
                              height: "2px",
                            }}
                          />
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              cursor:"pointer"

                        
                            }}
                          >
                            <img src="/assets/move-svgrepo-com.svg" style={{ margin: "0 0px 0 24px"}} />
                            ????????????
                          </div>
                          <hr
                            style={{
                              borderTop: "1px solid rgb( 240, 240, 240)",
                              height: "2px",
                            }}
                          />
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              color:"red",
                              justifyContent: "flex-start",
                              cursor:"pointer"

                            }}
                            onClick={() => handleBulkDelete(selectedRows)}
                          >
                            <img src="/assets/trash-svgrepo-com-2.svg" style={{ margin: "0 8px 0 16px" }} />
                            ??????
                          </div>
                        </div>
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </div>
            ),

            // isFreeAction: true,
          },

          {
            icon: () => (
              <div onClick={handleClickOpen('body')}>
                <img
                  style={{
                    backgroundColor: "rgb( 227, 156, 0)",
                    
                    color: "#000",
                    padding: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                  }}
                  src="/assets/Group 182.svg"
                />
              </div>
            ),
        
            onClick: () => add(),
            isFreeAction: true,
          },
          {
            icon: () => (
              <div
                onClick={downloadFile}
                style={{
                  backgroundColor: "black",
                  cursor: "pointer",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  padding: "8px",
                  // marginLeft: "32px",
                }}
              >
                <span style={{fontFamily:"Shabnam",fontSize:"1rem"}}>????????????</span>
                <img
                  src="/assets/download-arrow-svgrepo-com.svg"
                  style={{ marginRight: "8px" }}
                />
              </div>
            ),
            tooltip: "????????????",
            isFreeAction: true,
          },


        ]}
      />
      <div>
        <Dialog
          PaperProps={{
            style: { borderRadius: 12,width:"70%" }
          }}
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="xl"
        >
            <ApiaryAddList />
        </Dialog>
      </div>

      <div>
        <Modal
          open={downloadOpen}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 1000 }} className="downloadFile" style={{ display: "flex" ,alignItems: "center",justifyContent: "center"}}>
            <div onClick={downloadExcel} className="downloadExcel" ><img src="/assets/excel-svgrepo-com.svg"/></div>
            <div onClick={downloadPdf} className="downloadPdf" ><img src="/assets/pdf-svgrepo-com (1).svg"/></div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Hive;
