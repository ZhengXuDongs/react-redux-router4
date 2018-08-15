import * as types from '../constant/UserConstant';

const user = {
    name:'李华',
    age:'20',
    sex:'男',
    birth:'1993-01-01',
    token:'weewsfsdfgsdfdsfs'
};

// export function getUserInfo() {
//     return {
//         type: types.GET_USER_INFO,
//         user: user
//     }
// }

// let url = 'http://139.196.160.162:8888/api/app/book/get-chapter?chapter_id=book_id69de53b82bbf901b';
let url = 'https://m.readnovel.com/majax/comment/pageList?_csrfToken=zCsQQIm3ih4M4EBykmNDAMFiFG46cv602WP0I0CW&pageNum=1&pageSize=3&bookId=9316174004623201&chanId=30020&authorId=5391302503956101&userLevel=&rateId=&status=&cnt=&amount=';

export const getUserInfo = () => dispatch => {
    // request
    dispatch({type: types.GET_USER_INFO});

    dispatch({
        type: types.UPDATE_USER_INFO_SUCCESS,
        user: user
    });

    // fetch(url,{ headers: {} }).then(response => response.json()).then((res) => {
    //     dispatch({
    //         type: types.UPDATE_USER_INFO_SUCCESS,
    //         user: res
    //     });
    // }).catch(err => {
    //     dispatch({
    //         type: types.UPDATE_USER_INFO_FAILED,
    //         user: null,
    //     });
    // });
};


export const updateUserInfo = () => dispatch => {
    dispatch({
        type: types.UPDATE_USER_INFO_SUCCESS,
        user: {
            name:'西欧阿里',
            age:'22',
            sex:'女',
            birth:'1995-01-01',
            token:'bus'
        }
    });
};



// export function updateUserInfo(id) {
//     if(id===1){
//         return {
//             type:types.UPDATE_USER_INFO_SUCCESS,
//             user:{
//                 name:'西欧阿里',
//                 age:'22',
//                 sex:'女',
//                 birth:'1995-01-01',
//                 token:'weewsfsdfgsdfdsfs'
//             }
//         }
//     }else{
//         return {
//             type:types.UPDATE_USER_INFO_FAILED,
//             user:{
//                 errMsg:'更新失败'
//             }
//         }
//     }
// }