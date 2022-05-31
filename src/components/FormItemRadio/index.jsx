import { Form, Input, Radio } from 'antd'

function FormItemRadio(props) {
  const { label, name, value, onChange, items, itemLabels } = props

  return (
    <Form.Item label={label}>
      <Radio.Group value={value} name={name} onChange={onChange}>
        {items.map((value, i) => (
          <Radio key={i} value={value}>
            {itemLabels[i]}
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  )
}

export default FormItemRadio
