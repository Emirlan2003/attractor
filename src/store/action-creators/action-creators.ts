import axios from "axios";
import { Dispatch } from "react";
import { ActionTypes, EActionTypes } from "../../types";




export const getUser = () => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        try{
            const accessToken = JSON.parse(localStorage.getItem('token') || '{}')
            const result = await axios({
                method: 'get',
                url: `https://api.github.com/user`,
                headers: {
                  accept: 'application/vnd.github.v3+json',
                  Authorization: `token ${accessToken}`
                }
            });
            dispatch({type: EActionTypes.GET_USER, payload: result.data})
        }catch(e){
            console.log(e)
        }
    }

}




export const getRepos = () => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        try{
            const accessToken = JSON.parse(localStorage.getItem('token') || '{}')
            const result = await axios({
                method: 'get',
                url: `https://api.github.com/user/repos?type=all`,
                headers: {
                  accept: 'application/vnd.github.v3+json',
                  Authorization: `token ${accessToken}`,
                }
            });
            dispatch({type: EActionTypes.GET_REPOS, payload: result.data})
        }catch(e){
            console.log(e)
        }
    }

}





export const getUsers = (search: any, page: number) => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        try{
            const accessToken = JSON.parse(localStorage.getItem('token') || '{}')
            const result = await axios({
                method: 'get',
                url: `https://api.github.com/search/users?q=${search}&page=${page}`,
                headers: {
                  accept: 'application/vnd.github.v3+json',
                  Authorization: `token ${accessToken}`
                }
            });
            dispatch({type: EActionTypes.GET_USERS, payload: result.data.items})
            dispatch({type: EActionTypes.GET_LENGTH, payload: result.data})
        }catch(e){
            console.log(e)
        }
    }

}


export const getDetails = (id: any) => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        try{
            const accessToken = JSON.parse(localStorage.getItem('token') || '{}')
            const result = await axios({
                method: 'get',
                url: `https://api.github.com/users/${id}`,
                headers: {
                  accept: 'application/vnd.github.v3+json',
                  Authorization: `token ${accessToken}`
                }
            });
            dispatch({type: EActionTypes.GET_DETAILS, payload: result.data})
        }catch(e){
            console.log(e)
        }
    }

}




export const getOtherRepos = (id: any) => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        try{
            const accessToken = JSON.parse(localStorage.getItem('token') || '{}')
            const result = await axios({
                method: 'get',
                url: `https://api.github.com/users/${id}/repos`,
                headers: {
                  accept: 'application/vnd.github.v3+json',
                  Authorization: `token ${accessToken}`
                }
            });
            dispatch({type: EActionTypes.GET_OTHER_REPO, payload: result.data})
        }catch(e){
            console.log(e)
        }
    }

}
