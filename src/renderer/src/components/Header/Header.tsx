import React, { useState } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'

const items: MenuProps['items'] = [
  {
    label: 'Configurações',
    key: 'config',
    icon: <MailOutlined />
  },
  {
    label: 'Iniciar Sessão',
    key: 'sessao',
    icon: <AppstoreOutlined />
  },
  {
    label: 'Market Data',
    key: 'market',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1'
          },
          {
            label: 'Option 2',
            key: 'setting:2'
          }
        ]
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3'
          },
          {
            label: 'Option 4',
            key: 'setting:4'
          }
        ]
      }
    ]
  },
  {
    label: 'Termo',
    key: 'termo',
    icon: <AppstoreOutlined />
  },
  {
    label: 'E&B',
    key: 'eeb',
    icon: <AppstoreOutlined />
  },
  {
    label: 'UDS',
    key: 'uds',
    icon: <AppstoreOutlined />
  },
  {
    label: 'Notícias',
    key: 'noticias',
    icon: <AppstoreOutlined />
  },
  {
    label: 'About',
    key: 'about',
    icon: <AppstoreOutlined />
  },
  {
    label: 'Confluence',
    key: 'confluence',
    icon: <AppstoreOutlined />
  }
]

const Header: React.FC = () => {
  const [current, setCurrent] = useState('mail')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
}

export default Header
