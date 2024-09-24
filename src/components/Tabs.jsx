import { useState } from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import { Container, Nav, Tab } from 'react-bootstrap';
import styles from '../styles/Tabs.module.scss'; 

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <Container className={styles['tabs-container']}>
      <Nav
        variant="tabs"
        activeKey={activeTab}
        onSelect={(selectedKey) => setActiveTab(selectedKey)}
        className={styles['nav-tabs']}
      >
        <Nav.Item>
          <Nav.Link eventKey="tab1" className={styles['nav-link']}>
            Tab 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab2" className={styles['nav-link']}>
            Tab 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab3" className={styles['nav-link']}>
            Tab 3
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content className={styles['tab-content']}>
        {activeTab === 'tab1' && <Tab1 />}
        {activeTab === 'tab2' && <Tab2 setActiveTab={setActiveTab} />}
        {activeTab === 'tab3' && <Tab3 />}
      </Tab.Content>
    </Container>
  );
};

export default TabsComponent;
