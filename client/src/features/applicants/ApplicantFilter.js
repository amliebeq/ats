import React from 'react'

export const ApplicantFilter = ({ setFilterValue }) => {
    const onFilterChange = (e) => setFilterValue(e.target.value)

  return (
    <div className='pt-4'>
        <label className='pr-4 text-sm font-bold text-grey-darker'>Filter Applicants</label>
        <input className='w-10/12 px-3 py-2 mb-2 border rounded-lg' type='text' onChange={onFilterChange} />
    </div>
  )
}
