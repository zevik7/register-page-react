import { useState } from 'react'
import { Table, Tag, Space, Button } from 'antd'
import './style.less'

const TableCustom = (props) => {
  const { data, columns, onDelete, onAdd, onClickRow } = props

  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }

  const hasSelected = selectedRowKeys.length > 0

  const handleDelete = (selectedRowKeys) => {
    onDelete(selectedRowKeys)
    setSelectedRowKeys([])
  }

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
          onClick={() => handleDelete(selectedRowKeys)}
          disabled={!hasSelected}
        >
          Delete
        </Button>
        <Button type="primary" onClick={onAdd}>
          Add
        </Button>
      </div>
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: () => onClickRow(record), // click row
          }
        }}
        bordered={true}
        rowClassName={'table-row'}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
      />
    </>
  )
}

export default TableCustom
