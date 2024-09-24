import TabsComponent from './components/Tabs';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

// Wrap the main root component
const App = () => (
  <Provider store={store}>
    <div className="App">
      <TabsComponent />
    </div>
  </Provider>
);

export default App;
