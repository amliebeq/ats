import React from 'react';
import { useSelector } from 'react-redux';
import { List } from './List'
import { AddListForm } from './AddListForm';

export const ListList = () => {
    const lists = useSelector(state => state.login.user.lists)

    const listListCreation = lists.map(list => <List list={list} key={list.id} />)

    return (
        <div>
            <AddListForm />
            {lists.length === 0 ? <p>No lists added yet!</p> : listListCreation}
        </div>
    )
}
