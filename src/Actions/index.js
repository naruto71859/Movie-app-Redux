import {
  add_Movie,
  add_title,
  add_link,
  add_rate,
  add_year,
  delete_Movie,
  edit_Movie,
  search_value,
  NameFilter,
  Rate_value,
  RateFilter,
  set_details
} from "../const/TypeOfAction";

export const ADDMOVIE = payload => {
  return { type: add_Movie, payload };
};
export const ADDTITLE = payload => {
  return { type: add_title, payload };
};
export const ADDYEAR = payload => {
  return { type: add_year, payload };
};
export const ADDLINK = payload => {
  return { type: add_link, payload };
};
export const ADDRATE = payload => {
  return { type: add_rate, payload };
};

export const DELETEMOVIE = payload => {
  return { type: delete_Movie, payload };
};
export const EDITMOVIE = payload => {
  return { type: edit_Movie, payload };
};

export const SEARCH = payload => {
  return { type: search_value, payload };
};
export const NAMEFILTER = payload => {
  return { type: NameFilter, payload };
};
export const RATE = payload => {
  return { type: Rate_value, payload };
};
export const RATEFILTER = payload => {
  return { type: RateFilter, payload };
};
export const SETDETAILS = payload => {
  return { type: set_details, payload };
};
