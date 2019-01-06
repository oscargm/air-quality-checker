import * as React from "react";
import { DetailView } from "../layouts/detail-view.component";
import { StationDetailContainer } from "../pods/station-detail/station-detail.container";

export const SceneStationDetail: React.StatelessComponent = props => {
  return (
    <DetailView>
      <StationDetailContainer {...props} />
    </DetailView>
  );
};
