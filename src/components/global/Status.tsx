import { Fragment } from 'react'

interface StatusProps {
  // status?: 'PENDING' | 'ACTIVE' | 'ARCHIVED' | 'DEACTIVATED'
  status?: string
  className?: string
}

const Status = ({status, className}:StatusProps) => {

  return (
    <Fragment>
      <div className={`py-1 px-2 rounded-lg text-black hover:text-gray-500 decoration-0 capitalize ${className}`} style={{
        backgroundColor: status === 'PENDING' ? '#FDEFE2' : status === 'ACTIVE' ? '#D9FFEF' : status === 'ARCHIVED' ? '#F1F7FF' : '#FCDFDF',
        color: status === 'PENDING' ? '#C5A88E' : status === 'ACTIVE' ? '#2A5542' : status === 'ARCHIVED' ? '#727C94' : '#5C2725',
      }}>
        <p className={`font-bold text-center`}>{status?.toLowerCase()}</p>
      </div>
    </Fragment>
  )
}

export default Status;