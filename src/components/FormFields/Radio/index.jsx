import { Form, Input, Radio } from 'antd'

function RadioField(props) {
  const { label, name, value, onChange, items, itemLabels, disabled } = props

  return (
    <Form.Item label={label}>
      <Radio.Group
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled}
      >
        {items.map((value, i) => (
          <Radio key={value} value={value}>
            {itemLabels[i]}
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  )
}

export default RadioField
