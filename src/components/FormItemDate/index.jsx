import { Form, DatePicker } from 'antd'

function FormItemDate(props) {
  const { label, validateStatus, help, name, value, onChange } = props

  return (
    <Form.Item label={label} validateStatus={validateStatus} help={help}>
      <DatePicker name={name} value={value} onChange={onChange} />
    </Form.Item>
  )
}

export default FormItemDate
