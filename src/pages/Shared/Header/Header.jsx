import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
  return (
    <div className='text-center text-xl space-y-2'>
      <img src={logo} className='md:w-[470] mx-auto p-2' alt="" />
      <h2 className=' text-gray-500'>Journalism Without Fear or Favour</h2>
      <p>{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;