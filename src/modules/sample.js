import { handleActions } from "redux-actions";
import * as api from "../lib/api";

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

// 액션 생성 함수 안 만들고  thunk 함수 사용 , dispatch() 사용하는 타입을 명시해줌

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST }); // 요청 시작
  try {
    const response = await api.getPost(id);
    dispatch({ type: GET_POST_SUCCESS, payload: response.data }); // 요청 성공
  } catch (e) {
    dispatch({ type: GET_POST_FAILURE, payload: e, error: true }); // 에러 발생
    throw e; // 나중에 컴포넌트 단에서 에러를 조회할 수 있게 해줌
  }
};

export const getUsers = (id) => async (dispatch) => {
  dispatch({ type: GET_USERS }); // 요청 시작
  try {
    const response = await api.getUsers();
    dispatch({ type: GET_USERS_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: GET_USERS_FAILURE, payload: e, error: true });
    throw e;
  }
};

// 초기 상태 선언
// 요청의 로딩 중 상태는 loading이라는 객체에서 관리
const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: true, // 요청 시작
      },
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loadng: {
        ...state.loading,
        GET_POST: false,
      },
      post: action.payload,
    }),
    [GET_POST_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false,
      },
    }),
    [GET_USERS]: (state) => ({
      ...state,
      loading: {
        ...state.loadng,
        GET_USERS: true, // 요청시작
      },
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false,
      },
      users: action.payload,
    }),
    [GET_USERS_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        GET_USERS: false,
      },
    }),
  },
  initialState
);
export default sample;
