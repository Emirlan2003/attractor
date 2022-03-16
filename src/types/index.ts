export enum EActionTypes {
    GET_USER = "GET_USER",
    GET_REPOS = "GET_REPOS",
    GET_USERS = "GET_USERS",
    GET_LENGTH = "GET_LENGTH",
    GET_DETAILS = "GET_DETAILS",
    GET_OTHER_REPO = "GET_OTHER_REPO"
}


export interface IUser {
    name: string,
    login: string,
    email: string,
    img: any,
    company: string,
    location: string,
    description: any,
    link: any
}


export interface IInit {
    user: any,
    repos: any[],
    users: any,
    length: any,
    details: any,
    otherRepo: any
}


interface ActionTypesGetUser {
    type: EActionTypes.GET_USER,
    payload: any
}

interface ActionTypesGetRepos {
    type: EActionTypes.GET_REPOS,
    payload: any
}


interface ActionTypesGetUsers {
    type: EActionTypes.GET_USERS,
    payload: any[]
}

interface ActionTypesGetLength {
    type: EActionTypes.GET_LENGTH,
    payload: any
}

interface ActionTypesGetDetails {
    type: EActionTypes.GET_DETAILS,
    payload: any
}

interface ActionTypesGetOtherRepos {
    type: EActionTypes.GET_OTHER_REPO,
    payload: any
}

export type ActionTypes = ActionTypesGetUser
                        | ActionTypesGetRepos
                        | ActionTypesGetUsers
                        | ActionTypesGetLength
                        | ActionTypesGetDetails
                        | ActionTypesGetOtherRepos