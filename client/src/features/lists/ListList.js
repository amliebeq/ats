import React from 'react';
import { useSelector } from 'react-redux';
import { List } from './List'
import { AddListForm } from './AddListForm';

export const ListList = () => {
    const lists = useSelector(state => state.login.user.lists)

    const listListCreation = lists.map(list => <List list={list} key={list.id} />)

    return (
        <div className='pl-4 pr-12 break-words'>
            <h1 className='py-8 text-2xl text-center'>Lists</h1>
            <AddListForm />
            {lists.length === 0 ? <p>No lists added yet!</p> : listListCreation}
        </div>
    )
}
