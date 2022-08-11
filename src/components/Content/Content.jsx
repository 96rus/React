import React from "react";
import content from "./Content.module.css";
import Messages from "./Messages/Messages";
import Notifications from "./Notifications/Notifications";
import Stats from "./Stats/Stats";
import Settings from "./Settings/Settings";
import { Route, Routes } from "react-router-dom";
import Explore from "./Explore/Explore";

const Content = (props) => {
  return (
    <div className={content.content}>
      <Routes>
        <Route path="/notifications" element={<Notifications />} />
        <Route
          path="/messages*"
          element={
            <Messages state={props.state.messages} dispatch={props.dispatch} />
          }
        />
        <Route path="/settings" element={<Settings />} />
        <Route path="/stats" element={<Stats />} />
        <Route
          path="/explore"
          element={<Explore exploreData={props.state.explore.exploreData} />}
        />
      </Routes>
    </div>
  );
};

export default Content;
