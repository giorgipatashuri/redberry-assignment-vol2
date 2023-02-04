import './Home.scss';
const logo = require('../../imgs/logo.png');
const bg = require('../../imgs/background.png');

const Home = () => {
  return (
    <div className='homeWrapper'>
      <img src={logo} alt='logo' />
      <div className='line'></div>
      <div className='container'>
        <button className='homeBtn'>რეზიუმეს დამატება</button>
      </div>
    </div>
  );
};
export default Home;
