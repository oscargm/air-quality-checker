import * as React from "react";
import { DetailView } from "../layouts/detail-view.component";
import { StationDetailContainer } from "../pods/station-detail/";

export const SceneStationDetail: React.StatelessComponent = props => {
  return (
    <DetailView>
      <StationDetailContainer {...props} />
    </DetailView>
  );
};
