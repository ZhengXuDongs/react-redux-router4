import * as types from '../constant/UserConstant';

const initialState = {
    user:{}
};

const UserReducer = function (state = initialState, action) {
  switch (action.type) {
      case types.GET_USER_INFO:
          return Object.assign({},state,{
              ...state,
              user:action.user
          });

      case types.UPDATE_USER_INFO_SUCCESS:


          return Object.assign({},state,{
              ...state,
              user: action.user
          });

      case types.UPDATE_USER_INFO_FAILED:
          return Object.assign({},state,{
              ...state,
              user:action.user
          });
      default :
          return state;
  }
};

export default UserReducer;
