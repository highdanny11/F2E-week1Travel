import axios from 'axios';
import getAuthorizationHeader from './AuthorizationHeader';
// 狀況1:搜尋欄位是空的。
// 有類別、無縣市
export const getOptions = (option) => axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/${option}?&$format=JSON`,
  { headers: getAuthorizationHeader() });
// 有類別、有縣市
export const getOptionsArea = (option, area) => axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/${option}/${area}?&$format=JSON`,
  { headers: getAuthorizationHeader() });

// 無類別(取餐廳、住宿)(取景點、活動)、有縣市
export const getAllarea = ((area, all) => {
  const getActAll = (data) => axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/${data}?&$format=JSON`,
    { headers: getAuthorizationHeader() });
  const getSecAll = (data) => axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${data}?&$format=JSON`,
    { headers: getAuthorizationHeader() });
  const getHotelAll = (data) => axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/${data}?&$format=JSON`,
    { headers: getAuthorizationHeader() });
  const getResAll = (data) => axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/${data}?&$format=JSON`,
    { headers: getAuthorizationHeader() });
  if (all) {
    return Promise.all([getActAll(area), getSecAll(area)]);
  }
  return Promise.all([getHotelAll(area), getResAll(area)]);
});
// 無類別、無縣市跳轉當頁

// 狀況2: 搜尋欄位有值
// 有類別、無縣市
export const searchOptions = (option, search) => axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/${option}?$filter=contains(${option}Name,'${search}')&$format=JSON`,
  { headers: getAuthorizationHeader() });
// 有類別、有縣市
export const searchOptionsArea = (option, area, search) => axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/${option}/${area}?$filter=contains(${option}Name,'${search}')&$format=JSON`,
  { headers: getAuthorizationHeader() });
// 無類別(取餐廳、住宿)(取景點、活動)、 有線市
export const searchAllarea = ((area, search, selectOption) => {
  const searchActAll = (Area, Search) => axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/${Area}?$filter=contains(ActivityName,'${Search}')&$format=JSON`,
    { headers: getAuthorizationHeader() });
  const searchSecAll = (Area, Search) => axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${Area}?$filter=contains(ScenicSpotName,'${Search}')&$format=JSON`,
    { headers: getAuthorizationHeader() });
  const searchHotelAll = (Area, Search) => axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/${Area}?$filter=contains(HotelName,'${Search}')&$format=JSON`,
    { headers: getAuthorizationHeader() });
  const searchResAll = (Area, Search) => axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/${Area}?$filter=contains(RestaurantName,'${Search}')&$format=JSON`,
    { headers: getAuthorizationHeader() });
  if (selectOption) {
    return Promise.all([searchActAll(area, search), searchSecAll(area, search)]);
  }
  return Promise.all([searchHotelAll(area, search), searchResAll(area, search)]);
});
// 無類別、無縣市
export const searchAll = ((search, selectOption) => {
  const searchActAll = (Search) => axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$filter=contains(ActivityName,'${Search}')&$format=JSON`,
    { headers: getAuthorizationHeader() });
  const searchSecAll = (Search) => axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(ScenicSpotName,'${Search}')&$format=JSON`,
    { headers: getAuthorizationHeader() });
  const searchHotelAll = (Search) => axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$filter=contains(HotelName,'${Search}')&$format=JSON`,
    { headers: getAuthorizationHeader() });
  const searchResAll = (Search) => axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$filter=contains(RestaurantName,'${Search}')&$format=JSON`,
    { headers: getAuthorizationHeader() });
  if (selectOption) {
    return Promise.all([searchActAll(search), searchSecAll(search)]);
  }
  return Promise.all([searchHotelAll(search), searchResAll(search)]);
});
