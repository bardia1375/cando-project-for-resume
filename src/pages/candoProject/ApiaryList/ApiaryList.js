import {
  Box,
  Button,
  Dialog,
  Fade,
  IconButton,
  Modal,
  Popover,
  Popper,
} from "@material-ui/core";
import React, { Children, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import "./ApiaryList.css";
import XLSX from "xlsx";
import {
  Delete,
  Edit,
  Edit as EditIcon,
  Info,
  MoreVertOutlined,
  Share,
  TramRounded,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import MaterialTable, { MTableToolbar } from "material-table";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "../../../Iran-Sans-normal";
import ApiaryAddList from "../../../components/Form/ApiaryList/ApiaryAddList";
import ApiaryUpdateList from "../../../components/Form/ApiaryList/ApiaryUpdateList";
import { gql, useQuery } from "@apollo/client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";



function ApiaryList() {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [downloadOpen, setdownloadOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState();
  const [toolbar, setToolbar] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const [errorMessage,setErrMessage] = useState()
  const [error,setIserror] = useState()
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);

    setScroll(scrollType);
  };
  const handleClickEdit = (scrollType) => () => {
    setOpenEdit(true);
    setScroll(scrollType);
  };  
  const handleDeleteOpen = (scrollType) => () => {
    setOpenDelete(true);
    setScroll(scrollType);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleEditOpen = () => {
    setOpenEdit(true);
  };
  // const handleDeleteOpen = () => {
  //   setOpenDelete(true);
  // };
  const handleClose = () => {
    setOpen(false);
    setdownloadOpen(false);
    setOpenEdit(false);
    setOpenDelete(false);
  };
  const Information=()=>{
        console.log("salamsaddfsdfsd");
  }
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "scroll",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "16px",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const [Apiary, setApiary] = useState([
    {
      id: "0",
      name: "??????????????????1",
      State: "??????????",
      city: "??????????",
      Application: "???????????? ??????????",
      Hives: "1",
      InadequatCondition: "1",
      goodCondition: "5",
      NeedToVisit: "5",
    },
    {
      id: "1",
      name: "??????????????????2",
      State: "??????????",
      city: "??????????",
      Application: "??????",
      Hives: "2",
      InadequatCondition: "5",
      goodCondition: "5",
      NeedToVisit: "5",
    },
    {
      id: "2",
      name: "??????????????????3",
      State: "????????????",
      city: "????????????????",
      Application: "???????????? ??????????",
      Hives: "12",
      InadequatCondition: "1",
      goodCondition: "5",
      NeedToVisit: "5",
    },
    {
      id: "3",
      name: "??????????????????4",
      State: "????????????",
      city: "??????????",
      Application: "??????",
      Hives: "22",
      InadequatCondition: "5",
      goodCondition: "5",
      NeedToVisit: "5",
    },
    {
      id: "4",
      name: "??????????????????5",
      State: "??????????",
      city: "??????",
      Application: "???????????? ??????????",
      Hives: "32",
      InadequatCondition: "1",
      goodCondition: "5",
      NeedToVisit: "5",
    },
    {
      id: "5",
      name: "??????????????????6",
      State: "????????????????",
      city: "??????????",
      Application: "??????",
      Hives: "12",
      InadequatCondition: "5",
      goodCondition: "5",
      NeedToVisit: "5",
    },
  ]);


  // useEffect(() => {
  //   axios.get("")
  //     .then(res => {
  //       setApiary(res.data.data)
  //     })
  //     .catch(error=>{
  //       setErrMessage(["Cannot load user data"])
  //       setIserror(true)
  //     })
  // }, [])



  const useStyles = makeStyles({
    Button: {
      margin: "8px 0px",
      fontFamily: "Shabnam",
      cursor: "pointer",
      width: "5%",
    },
  });
  const classes = useStyles();

  console.log(Apiary);
  const columns = [
    {
      title: "??????????????????",
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
            to={{
              pathname: `/app/ApiaryList/Beehive/${rowData.id}`,
              state: { rowData },
            }}
            className="title"
            style={{ display: "flex" }}
          >
            <p className="title">{rowData.name}</p>
          </Link>
        );
      },
    },

    {
      title: " ??????????",
      field: "State",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return <p className="description">{rowData.State}</p>;
      },
    },
    {
      title: " ??????",
      field: "city",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return <p className="description">{rowData.city}</p>;
      },
    },
    {
      title: "?????????? ????????",
      field: "Hives",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return <p className="description">{rowData.Hives}</p>;
      },
    },
    {
      title: "?????????? ??????????????",
      field: "InadequatCondition",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return <div className="circleRed">{rowData.InadequatCondition}</div>;
      },
    },
    {
      title: "?????????????? ????????????",
      field: "NeedToVisit",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return <p className="circleYellow">{rowData.NeedToVisit}</p>;
      },
    },
    {
      title: "?????????? ??????????",
      field: "goodCondition",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return <p className="circleGreen">{rowData.goodCondition}</p>;
      },
    },

    {
      title: "????????????",
      field: "thumbnail",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      render: (rowData) => {
        return (
          // <Link to={`/app/ApiaryList/${rowData.id}`}>
          <div>
          <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <MoreVertOutlined 
                    variant="contained"
                    {...bindTrigger(popupState)}
                    style={{ cursor: "pointer" }}
                    

                  />

            
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
                      <div style={{ borderRadius: " 16px", padding: " 16px",textDecoration:"none"}}>
                        <Link
                          to={`/app/ApiaryList/${rowData.id}`}
                          onClick={handleClickEdit("body")}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            cursor: "pointer",
                            color:"#000" 
                          }}
                        >
                          <Edit style={{ marginLeft: "16px" }} />
                          ????????????
                        </Link>
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
                            cursor: "pointer",
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
                            cursor: "pointer",
                          }}
                        >
                          <img
                            src="/assets/move-svgrepo-com.svg"
                            style={{ margin: "0 0px 0 24px" }}
                          />
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
                            color: "red",
                            justifyContent: "flex-start",
                            cursor: "pointer",
                          }}

                          onClick={() => onRowDelete(rowData,popupState)}
                          // onClick={handleDeleteOpen}
                        >
                          <img
                            src="/assets/trash-svgrepo-com-2.svg"
                            style={{ margin: "0 0px 0 24px" }}
                          />
                         S ??????
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
    const newData = Apiary.map((row) => {
      // bug
      // delete row.tableData;
      console.log("row", row.tableData);
      return row;
    });
    const workSheet = XLSX.utils.json_to_sheet(newData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "Apiary");
    //Buffer
    let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
    //Binary string
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
    //Download
    XLSX.writeFile(workBook, "???????? ??????????????????.xlsx");
  };

  const [searched, setSearched] = useState();

  const requestSearch = (searchedVal) => {
    const filteredRows = Apiary.map((rows) => {
      return rows.name;
      // console.log("rows.title",rows)
    }).filter((row) => {
      return row.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setApiary(filteredRows);
    console.log("Apiary", Apiary);
    console.log("filteredRows", filteredRows);
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const handleBulkDelete = () => {
    if(window.confirm("?????? ???? ?????? ?????? ???????? ?????????????? ????????????")){
      // const response = await axios.delete(`https://sdfsdf/${selectedRows[0].id}`)
    console.log("selectedRows",selectedRows);
    const updatedData = Apiary.filter((row) => !selectedRows.includes(row));
    setApiary(updatedData);
  }};

  const onRowDelete = (rowData,popupState) => {
    if(window.confirm("?????? ???? ?????? ?????? ???????? ?????????????? ????????????")){
      // const response = await axios.delete(`https://sdfsdf/${rowData.id}`)
    console.log("rowData23123", rowData);
    const updatedData = Apiary.filter((row) => ![rowData].includes(row));
    setApiary(updatedData);
    popupState.close();
   
  }};
  
  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("???????????? ??????????????????", 20, 10);
    console.log("doc", doc.text);
    doc.autoTable({
      theme: "grid",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: Apiary,
    });
    console.log("Apiary", Apiary);
    console.log("columns", columns);
    // doc.addFileToVFS("Shabnam-normal.ttf", font);
    doc.addFont("Shabnam-normal.ttf", "Shabnam", "normal");
    doc.setFont("font");
    // doc.setFont("Shabnam"); // set custom font
    doc.save("table.pdf");
  };

  const add = () => {
    return console.log("click");
  };

  // const { loading, error, data } = useQuery(GET_APIARIES)
  // if (loading) return '???????? ???? ?????? ?????? ?????? ??????'
  // if (error) return `Error! ${error.message}`

  return (
    <div>
      <h2 style={{ color: "rgb(227, 156, 0)" }}>??????????????????</h2>

      <MaterialTable
        localization={{
          toolbar: {
            searchPlaceholder: "??????????????????",
          },
        }}
        title=""
        style={{ borderRadius: "25px" }}
        data={Apiary}
        columns={columns}
        onSelectionChange={(rows) => setSelectedRows(rows)}
        localization={{
          body: {
            editRow: { deleteText: "?????? ???????????????? ?????? ?????? ???? ?????? ??????????" },
          },
          pagination: {
            labelDisplayedRows: "{from}-{to} ???? {count}",
            labelRowsSelect: "?????????? ????????",
            labelRowsPerPage: "??",
            firstAriaLabel: "?????????? ????????",

            previousAriaLabel: "???????? ??????",

            nextAriaLabel: "???????? ??????",
            lastAriaLabel: "?????????? ????????",
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
            // checked: Apiary?.includes(rowData.value) ? true: false,
            onClick: () => {
              console.log("clicked asdasda");
              setToolbar(true);
            },
          }),
          search: true,
          searchFieldAlignment: "left",
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
        // components={

        //   {
        //     // Toolbar: (props) => (
        //     //   <>
        //     //     <div
        //     //       style={{
        //     //         direction: "rtl",
        //     //         display: "flex",
        //     //         justifyContent: "space-between",
        //     //         alignItems: "center",
        //     //         padding: "16px  32px  0px",
        //     //       }}
        //     //     >
        //     //       <div
        //     //         style={{
        //     //           display: "flex",
        //     //           alignItems: "center",
        //     //           justifyContent: "center",
        //     //         }}
        //     //       >
        //     //         <SearchBar
        //     //           style={{
        //     //             direction: "ltr",
        //     //             border: "1px solid red",
        //     //             width: "100%",
        //     //             borderRadius: "8px",
        //     //           }}
        //     //           value={searched}
        //     //           onChange={(searchVal) => requestSearch(searchVal)}
        //     //           onCancelSearch={() => cancelSearch()}
        //     //         />
        //     //         {/* <MTableToolbar {...props} /> */}
        //     //         <div
        //     //           onClick={handleOpen}
        //     //           style={{
        //     //             backgroundColor: "rgb( 227, 156, 0)",
        //     //             marginRight: "32px",
        //     //             color: "#000",
        //     //             padding: "8px",
        //     //             display: "flex",
        //     //             alignItems: "center",
        //     //             justifyContent: "center",
        //     //             borderRadius: "8px",
        //     //           }}
        //     //         >
        //     //           <img src="/assets/Group 182.svg" />
        //     //         </div>
        //     //       </div>
        //     //       <div
        //     //         onClick={downloadFile}
        //     //         style={{
        //     //           backgroundColor: "black",
        //     //           cursor: "pointer",
        //     //           color: "white",
        //     //           display: "flex",
        //     //           alignItems: "center",
        //     //           justifyContent: "center",
        //     //           borderRadius: "8px",
        //     //           padding: "8px",
        //     //           // marginLeft: "32px",
        //     //         }}
        //     //       >
        //     //         <span>????????????</span>
        //     //         <img
        //     //           src="/assets/download-arrow-svgrepo-com.svg"
        //     //           style={{ marginRight: "8px" }}
        //     //         />
        //     //       </div>
        //     //     </div>
        //     //     <hr
        //     //       style={{
        //     //         borderTop: "1px solid rgb( 240, 240, 240)",
        //     //         height: "2px",
        //     //       }}
        //     //     />
        //     //     {toolbar ? (
        //     //       <MTableToolbar {...props}>{console.log(props)}</MTableToolbar>
        //     //     ) : null}
        //     //   </>
        //     // ),
        //   }
        // }

        actions={[
          {
            icon: () => (
              <div>
                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <MoreVertOutlined
                        variant="contained"
                        {...bindTrigger(popupState)}
                        style={{ cursor: "pointer" }}

                      />

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
                   
                          <Link
                            to={`/app/ApiaryList/${selectedRows}`}
                            onClick={handleClickEdit("body")}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              cursor: "pointer",
                            }}
                          >
                            <Edit style={{ marginLeft: "16px" }} />
                            ????????????
                          </Link>
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
                              cursor: "pointer",
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
                              cursor: "pointer",
                            }}
                          >
                            <img
                              src="/assets/move-svgrepo-com.svg"
                              style={{ margin: "0 0px 0 24px" }}
                            />
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
                              color: "red",
                              justifyContent: "flex-start",
                              cursor: "pointer",
                            }}
                            onClick={() => handleBulkDelete(selectedRows)}
                          >
                            <img
                              src="/assets/trash-svgrepo-com-2.svg"
                              style={{ margin: "0 8px 0 16px" }}
                              alt=""
                            />
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
              <div onClick={handleClickOpen("body")}>
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
            tooltip: "?????????? ???????? ??????????????????",

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
                <span style={{ fontFamily: "Shabnam", fontSize: "1rem" }}>
                  ????????????
                </span>
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
            style: { borderRadius: 12, width: "70%" },
          }}
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          maxWidth="xl"
        >
          <ApiaryAddList Apiary={Apiary} setApiary={setApiary}/>
        </Dialog>
      </div>

      <div>
        <Dialog
          PaperProps={{
            style: { borderRadius: 12, width: "70%" },
          }}
          open={openEdit}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          maxWidth="xl"
        >
          <ApiaryUpdateList Apiary={Apiary} setApiary={setApiary}/>
        </Dialog>
      </div>

      <div>
        <Modal
          open={openDelete}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box
            sx={{ ...style, width: 1000 }}
            className="downloadFile"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button onClick={() => handleBulkDelete(selectedRows)}>Delete</button>
          </Box>
        </Modal>
      </div>

      <div>
        <Modal
          open={downloadOpen}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box
            sx={{ ...style, width: 1000 }}
            className="downloadFile"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div onClick={downloadExcel} className="downloadExcel">
              <img src="/assets/excel-svgrepo-com.svg" />
            </div>
            <div onClick={downloadPdf} className="downloadPdf">
              <img src="/assets/pdf-svgrepo-com (1).svg" />
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default ApiaryList;
