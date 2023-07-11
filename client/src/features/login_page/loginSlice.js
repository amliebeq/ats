import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: 'login',
    initialState: {
        user: null,
        hasAccount: true,
    },
    reducers: {
        toggleAccount: state => {
            state.hasAccount = !state.hasAccount
        },
        userAdded: (state, action) => {
            state.user = action.payload
        },
        jobAdded: (state, action) => {
            state.user.jobs.push(action.payload)
        },
        applicantAdded: (state, action) => {
            state.user.applicants.push(action.payload)
        },
        listAdded: (state, action) => {
            state.user.lists.push(action.payload)
        },
        listRemoved: (state, action) => {
            const index = state.user.lists.findIndex((list) => list.id === action.payload)
            state.user.lists.splice(index, 1)
        },
        applicantRemoved: (state, action) => {
            const index = state.user.applicants.findIndex((applicant) => applicant.id === action.payload)
            state.user.applicants.splice(index, 1)
        },
        jobRemoved: (state, action) => {
            const index = state.user.jobs.findIndex((job) => job.id === action.payload)
            state.user.jobs.splice(index, 1)
        },
        listEdited: (state, action) => {
            const index = state.user.lists.findIndex((list) => list.id === action.payload.id)
            state.user.lists[index].name = action.payload.name
        }
    },
})

export const { toggleAccount, userAdded, jobAdded, applicantAdded, listAdded, listRemoved, applicantRemoved, jobRemoved, listEdited } = slice.actions

export default slice.reducer