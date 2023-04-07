import React, { useState } from "react";
import { AppBar, Grid, Tab, Tabs, Toolbar, useMediaQuery } from "@mui/material";
import MobileNav from "../components/common/MobileNav";
import { useTheme } from "@mui/material/styles"

export const menuTitle = [
  {
    title: "SERVICES",
    route: "/SERVICES",
  },
  {
    title: "OUR ADVANTAGES",
    route: "/OUR ADVANTAGES",
  },
  {
    title: "ABOUT US",
    route: "/ABOUT US",
  },
  {
    title: "CONTACT",
    route: "/CONTACT",
  },
];

const tabStyle = {
  appBar: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  menuItem: {
    color: "white",
    fontSize: { xs: "8px", sm: "10px", md: "12px",lg:"18px" },
  },
};

export default function Header() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar sx={{ ...tabStyle.appBar }}>
      <Toolbar sx={{justifyContent:{xs:'start',md:'center'}}}>
        <Grid p={5} >
          {isMobile ? (
            <MobileNav />
          ) : (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="disabled tabs example">
              {menuTitle.map((e, i) => (
                <Tab
                  sx={{
                    ...tabStyle.menuItem,
                  }}
                  label={e.title}
                  key={`title${i}`}
                />
              ))}
            </Tabs>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
