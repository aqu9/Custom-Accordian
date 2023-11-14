import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AccordianProps, AccordianContent } from "../utils/types";

const CustomAccordian = (props: AccordianProps) => {
  const [expanded, setExpanded] = useState<number | false>(
    props?.isChildren ? false : 0
  );
  const handleAccordianChange =
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        {Object.entries(props?.data).map(([key, value], index) => {
          return (
            <Accordion
              key={index}
              sx={{
                px: 2,
                width: "auto",
                paddingBottom: "5px",
                backgroundColor: props?.bgColor || "white",
                "&:before": {
                  display: "none",
                },
              }}
              disableGutters
              elevation={0}
              expanded={expanded === index}
              onChange={handleAccordianChange(index)}>
              <AccordionSummary
                sx={{
                  backgroundColor: props?.headerBgColor || "#cccc",
                  color: props?.headerColor || "black",
                  fontWeight: 550,
                  borderRadius: "5px",
                  maxHeight: props?.headerHeight || "28px",
                  minHeight: props?.headerHeight || "28px",
                  fontSize: "16px",
                }}
                expandIcon={
                  expanded === index ? (
                    props?.removeIcon ? (
                      props.removeIcon
                    ) : (
                      <Typography
                        sx={{ fontSize: "22px", color: props?.headerColor }}>
                        -
                      </Typography>
                    )
                  ) : props?.addIcon ? (
                    props.addIcon
                  ) : (
                    <Typography
                      sx={{ fontSize: "22px", color: props?.headerColor }}>
                      +
                    </Typography>
                  )
                }
                id={key}>
                {key}
              </AccordionSummary>
              <Box>
                <AccordionDetails
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 2,
                    py: 2,
                    ml: 2,
                  }}>
                  {value.accordianContent.map(
                    (item: AccordianContent, index: number) => {
                      return (
                        <>
                          <Box
                            key={index}
                            sx={{
                              width: "100%",
                              display: "flex",
                              rowGap: 5,
                              position: "relative",
                            }}>
                            <Box
                              sx={{
                                position: "absolute",
                                width: "2px",
                                left: "-21px",
                                top: "0%",
                                bottom:
                                  value.accordianContent.length - 1 === index
                                    ? "24px"
                                    : "-19px",
                                background: props?.lineColor || "#EDEEEF",
                                flex: "none",
                                order: 6,
                                flexGrow: 0,
                                zIndex: 6,
                              }}
                            />
                            <Box
                              sx={{
                                boxSizing: "border-box",
                                position: "absolute",
                                width: "16px",
                                height: "8px",
                                left: "-21px",
                                top: "calc(50% - 18px/2)",
                                borderWidth: "0px 0px 2px 2px",
                                borderStyle: "solid",
                                borderColor: props?.lineColor || "#EDEEEF",
                                borderRadius: "0px 0px 0px 8px",
                                flex: "none",
                                order: 2,
                                flexGrow: 0,
                                zIndex: 2,
                              }}
                            />
                            <Box sx={{ width: "100%" }}>
                              {item?.title && (
                                <Typography
                                  sx={{
                                    color: props?.color || "black",
                                    fontSize: props?.fontSize || "14px",
                                    fontWeight: props?.fontWeight || 450,
                                  }}>
                                  {item?.title}
                                </Typography>
                              )}
                              {item?.component && item.component}
                              {item?.isChildren && (
                                <CustomAccordian
                                  {...props}
                                  isChildren={true}
                                  data={item?.children || {}}
                                />
                              )}
                            </Box>
                          </Box>
                        </>
                      );
                    }
                  )}
                </AccordionDetails>
              </Box>
            </Accordion>
          );
        })}
      </Box>
    </>
  );
};

export default CustomAccordian;
