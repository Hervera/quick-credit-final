import Enzyme, {
  shallow, render, mount, configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
  adapter: new Adapter(),
});

export {
  shallow,
  render,
  mount,
};

export default Enzyme;
