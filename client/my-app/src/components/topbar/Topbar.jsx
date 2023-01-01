import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideocamIcon from '@mui/icons-material/Videocam';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './topbar.css';



export const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="top-left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/330px-YouTube_full-color_icon_%282017%29.svg.png" className='logo' alt=""/>
            <span className="logo-text">Youtube</span>
        </div>
        <div className="top-center">
          <div className="top-search">
            <input type="text" placeholder='Search' />
            <div className="top-search-icon-container">
              <SearchIcon className="top-search-icon" />
            </div>
            <MicIcon className='mic-icon'/>
          </div>
        </div>
        <div className="top-right">
            <VideocamIcon className='top-icon' />
            <AppsIcon className='top-icon' />
            <NotificationsIcon className='top-icon' />
            <img className='top-img' src="https://pbs.twimg.com/profile_images/1378746215538569220/ugUmG8Xe_400x400.jpg" alt="" />
        </div>
    </div>
  )
}
