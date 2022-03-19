import axios from 'axios'
import { lastDayOfQuarterWithOptions } from 'date-fns/fp';

/* 개발자 가이드 등록 */
export function devGuideReg(params) {
  return axios({
    url: '/api/support/devGuide',
    method: 'post',
    data: params
  });
}

/* 개발자 가이드 수정 */
export function devGuideUpdate(devlopGuideSn,params) {
 
  return axios({
    url: '/api/support/devGuidec/'+devlopGuideSn,
    method: 'put',
    data: params
  });
}

/* 개발자 가이드 목록 조회 */
export function devGuideList(params) {
  return axios({
    url: '/api/support/devGuideList',
    method: 'get',
    params: params
  });
}
/* 개발자 가이드 상세 조회 */
export function devGuideView(params) {
  return axios({
    url: '/api/support/devGuide/'+params,
    method: 'get'
    //query: {params : params}
  });
}

/* 개발자 가이드 삭제 */
export function devGuideDel(params) {
  return axios({
    url: '/api/support/devGuide/'+params,
    method: 'delete',
    //data: params
  });
}