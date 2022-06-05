import { useState } from 'react'
import { Table, Tag, Space, Button } from 'antd'
import './style.less'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]

const TableCustom = (props) => {
  const { data, columns, onDelete } = props

  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }

  const hasSelected = selectedRowKeys.length > 0

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '20px',
          marginBottom: 16,
        }}
      >
        <span
          className="flex-center"
          style={{
            marginRight: '8px',
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
        <Button
          type="outlined"
          onClick={() => onDelete(selectedRowKeys)}
          disabled={!hasSelected}
        >
          Delete
        </Button>
        <Button type="primary" onClick={() => onDelete(selectedRowKeys)}>
          Add
        </Button>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </>
  )
}

export default TableCustom
