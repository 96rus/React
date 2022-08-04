import React from "react";
import content from "./Content.module.css";
import Messages from "./Messages/Messages";
import Notifications from "./Notifications/Notifications";
import Stats from "./Stats/Stats";
import Settings from "./Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Content = () => {
  return (
    <BrowserRouter>
      <div className={content.content}>
        <Routes>
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Content;
