import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Photo, Room } from 'models';

export interface DashboardStatistics {
  roomCount: number;
  photoCount: number;
}

export interface DashboardState {
  loading: boolean;
  statistics: DashboardStatistics;
  highlestPhotoList: Photo[];
  highlestRoomList: Room[];
}

const initialState: DashboardState = {
  loading: false,
  statistics: {
    photoCount: 0,
    roomCount: 0,
  },
  highlestPhotoList: [],
  highlestRoomList: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchData(state) {
      state.loading = true;
    },
    fetchDataSuccess(state) {
      state.loading = false;
    },
    fetchDataFailure(state) {
      state.loading = false;
    },

    setStatistics(state, action: PayloadAction<DashboardStatistics>) {
      state.statistics = action.payload;
    },
    setHighlestPhotoList(state, action: PayloadAction<Photo[]>) {
      state.highlestPhotoList = action.payload;
    },

    setHighlestRoomList(state, action: PayloadAction<Room[]>) {
      state.highlestRoomList = action.payload;
    },
  },
});

// actions
export const dashboardActions = dashboardSlice.actions;

// selectors
export const dashboardLoaddingSelector = (state: RootState) => state.dashboard.loading;
export const dashboardStatisticsSelector = (state: RootState) => state.dashboard.statistics;
export const dashboardHighlestPhotoListSelector = (state: RootState) =>
  state.dashboard.highlestPhotoList;
export const dashboardHighlestRoomSelector = (state: RootState) => state.dashboard.highlestRoomList;

// reducers
const dashboardReducer = dashboardSlice.reducer;
export default dashboardReducer;
