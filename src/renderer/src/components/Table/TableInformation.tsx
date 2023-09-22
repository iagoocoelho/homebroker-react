import React from 'react'
import { Space, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

const columns: ColumnsType<DataType> = [
  {
    title: 'TCP Sessions',
    dataIndex: 'tcp',
    key: 'tcp',
    render: (text) => <a>{text}</a>
  },
  {
    title: 'SBE MD Connections',
    dataIndex: 'sbe',
    key: 'sbe'
  },
  {
    title: 'General',
    dataIndex: 'general',
    key: 'general'
  },
  {
    title: 'Messages Monitor',
    dataIndex: 'monitor',
    key: 'monitor'
  },
  {
    title: 'Market Tools Monitor',
    key: 'market',
    dataIndex: 'market'
  },
  {
    title: 'Clear',
    key: 'clear',
    dataIndex: 'clear'
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

const TableInformation: React.FC = () => (
  <Table columns={columns} dataSource={data} pagination={false} />
)

export default TableInformation
