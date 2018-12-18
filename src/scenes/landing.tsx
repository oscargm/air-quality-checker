import * as React from "react";
import { DetailView } from "../layouts/detail-view.component";
import { StationListContainer } from "../pods/station-list/station-list.container";

export const SceneLanding: React.StatelessComponent = () => (
  <DetailView>
    <StationListContainer />
  </DetailView>
);
