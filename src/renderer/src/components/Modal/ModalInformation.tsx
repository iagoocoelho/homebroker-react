import React, { useState } from 'react'
import { Button, Drawer, FloatButton } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import TableInformation from '../Table/TableInformation'

const App: React.FC = () => {
  const [open, setOpen] = useState(false)

  const showDrawer = (): void => {
    setOpen(true)
  }

  const onClose = (): void => {
    setOpen(false)
  }

  return (
    <>
      <Button
        style={{ maxWidth: 'fit-content;', alignSelf: 'flex-end', marginRight: '2em' }}
        icon={<InfoCircleOutlined />}
        type="primary"
        onClick={showDrawer}
      >
        Information Board
      </Button>

      <Drawer
        title="Information"
        placement="bottom"
        closable={false}
        onClose={onClose}
        open={open}
        key="bottom"
      >
        <TableInformation />
      </Drawer>
    </>
  )
}

export default App
