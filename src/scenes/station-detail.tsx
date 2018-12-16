import * as React from 'react';
import { DetailView } from '../layouts/detail-view.component';
import { StationDetailContainer } from '../pods/station-detail/';
import { createDefaultStationDetail } from '../pods/station-detail/station-detail.vm';

export const SceneStationDetail: React.StatelessComponent = () =>
    <DetailView>
        <StationDetailContainer stationDetail={createDefaultStationDetail()}/>
    </DetailView>