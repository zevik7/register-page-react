import { Layout } from 'antd'
import './style.less'

const { Footer } = Layout

function CopyrightFooter(props) {
  return (
    <Footer className="footer" style={props.style}>
      Phu Nguyen - phu.nguyen@nfq.asia
    </Footer>
  )
}

export default CopyrightFooter
