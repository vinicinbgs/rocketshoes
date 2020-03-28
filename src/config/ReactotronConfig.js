import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

console.log(process.env.NODE_ENV);

const reactotron = Reactotron.configure()
  .use(reactotronRedux())
  .connect();

reactotron.clear();

console.tron = reactotron;

export default reactotron;


