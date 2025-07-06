import PageTitle from './components/StatelessComponent';
import ClickCounter from './components/StatefulComponent';
import ClickCounterClass from './components/ClassComponent';

const App = () => {
  return (
    <div>
      <PageTitle title="Welcome to the Click Game!" />
      <ClickCounter />
      <ClickCounterClass />
    </div>
  );
};

export default App;