import React from 'react'
import AddPriceList from '../../components/dashboard/AddPriceList'

const updatePriceList = () => {
    document.title = 'Add price list'
    return (
        <div>
            <AddPriceList />
        </div>
    )
}

export default updatePriceList
