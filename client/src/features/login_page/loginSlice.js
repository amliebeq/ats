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
        },
        jobEdited: (state, action) => {
            const index = state.user.jobs.findIndex((job) => job.id === action.payload.id)
            state.user.jobs[index].title = action.payload.title
            state.user.jobs[index].pay_rate = action.payload.pay_rate
            state.user.jobs[index].location = action.payload.location
            state.user.jobs[index].description = action.payload.description
        },
        applicantEdited: (state, action) => {
            const index = state.user.applicants.findIndex((applicant) => applicant.id === action.payload.id)
            console.log(action.payload)
            console.log(state.user.applicants[index])
            state.user.applicants[index].city = action.payload.city
            state.user.applicants[index].email = action.payload.email
            state.user.applicants[index].first_name = action.payload.first_name
            state.user.applicants[index].last_name = action.payload.last_name
            state.user.applicants[index].phone = action.payload.phone
            state.user.applicants[index].position = action.payload.position
            state.user.applicants[index].state = action.payload.state
        },
        applicantAddedToList: (state, action) => {
            const index = state.user.lists.findIndex((list) => list.id === Number(action.payload.list_id))
            const applicant = state.user.applicants.find(applicant => applicant.id === action.payload.applicant_id)
            state.user.lists[index].applicants.push(applicant)
        },
        listAddedToApplicant: (state, action) => {
            const index = state.user.applicants.findIndex((applicant) => applicant.id === Number(action.payload.applicant_id))
            const list = state.user.lists.find(list => list.id === action.payload.list_id)
            state.user.applicants[index].lists.push(list)
        }
    },
})

export const { toggleAccount, userAdded, jobAdded, applicantAdded, listAdded, listRemoved, applicantRemoved, jobRemoved, listEdited, jobEdited, applicantEdited, applicantAddedToList, listAddedToApplicant } = slice.actions

export default slice.reducer