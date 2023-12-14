import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

export default function RightSideBar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const rightSidebar = (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer("right", false)}
      onKeyDown={toggleDrawer("right", false)}
    >
      <iframe
        width="97%"
        height="40%"
        src="https://www.youtube.com/embed/ZyrkZm7ufJg?si=hA8VUtKV11CiSm9o"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        autoPlay
      ></iframe>
      <h2 style={{ textAlign: "center", marginTop: "10px", color: "" }}>
        Strings In Java
      </h2>

      <iframe
        width="97%"
        height="40%"
        src="https://www.youtube.com/embed/YVkUvmDQ3HY?si=WwYkt6VZ-lHJlL5v"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h2 style={{ textAlign: "center", marginTop: "10px" }}>
        Eminem-Without Me
      </h2>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)}>Open Right Sidebar</Button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {rightSidebar}
      </Drawer>
    </div>
  );
}
