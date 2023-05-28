import { Fragment } from 'react'

interface StatusProps {
  status?: 'PENDING' | 'ACTIVE' | 'ARCHIVED' | 'DEACTIVATED'
}

const Status = ({status = 'PENDING'}:StatusProps) => {

  return (
    <Fragment>
      <div className={`py-1 px-2 rounded-lg text-black hover:text-gray-500 decoration-0`} style={{
        backgroundColor: status === 'PENDING' ? 'yellow' : status === 'ACTIVE' ? 'green' : status === 'ARCHIVED' ? 'blue' : 'red',
        textTransform: 'capitalize'
      }}>
        <p className={`font-extrabold text-center`}>{status}</p>
      </div>
    </Fragment>
  )
}

export default Status;