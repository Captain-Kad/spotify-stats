import React from "react";
import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./header";
import Sidebar from "./sidebar";
import Logout from "./logout";
import RecentlyPlayedTracks from "./recentlyPlayedTracks";

const HomePage = ({ spotify }) => {
  return (
    <HomePageContainer className="container-fluid text-center">
      <div className="row">
        <SidebarContainer className="col-md-2">
          <Sidebar />
        </SidebarContainer>

        <BodyContainer className="col-md-10">
          <Title>Welcome To Spotify Stats</Title>
          <Header />
          <Logout />
          <RecentlyPlayedTracks />
          {/* Body */}
        </BodyContainer>
      </div>
    </HomePageContainer>
  );
};

export default HomePage;

const HomePageContainer = styled.div`
  .container-fluid {
    margin: 0;
    padding: 0;
  }
`;

const SidebarContainer = styled.div`
  background-color: black;
  height: 100vh;
  width: 6.9%;
  font-size: 14px;
`;

const BodyContainer = styled.div`
  background-color: #131516;
  height: 100vh;
  width: 93.1%;
  overflow-y: overlay;
`;

const Title = styled.h1`
  margin-bottom: 30px;
`;
