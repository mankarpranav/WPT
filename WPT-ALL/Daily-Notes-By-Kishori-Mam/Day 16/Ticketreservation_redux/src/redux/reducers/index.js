import { combineReducers } from "redux";
import {accountingreducer,reservationHistoryreducer,cancellationHistoryreducer} from "./reservationreducers";

const railwayStore=combineReducers(
  {
      accounting:accountingreducer,
      reservationHistory:reservationHistoryreducer,
      cancellationHistory:cancellationHistoryreducer
  }
);

export default railwayStore;
