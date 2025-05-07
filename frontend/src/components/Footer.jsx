import React, { useState } from 'react'
import { useSnackbar } from 'notistack';
import axios from 'axios';

const Footer = () => {

    const [email, setEmail] = useState('');
    const { enqueueSnackbar } = useSnackbar();

    const handleSubscribe = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/subscriber`, { email });
          enqueueSnackbar(`Subscription successful: ${response.data.email}`, { variant: 'success' });
          setEmail('');
        } catch (error) {
            console.error('Error subscribing:', error);
            enqueueSnackbar('Error subscribing: ' + error.response.data, { variant: 'error' });
        }
      };
    

  return (
<footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    <h2 className='text-3xl'>CodeDeck</h2>
    <p>Providing reliable tech since 2024</p>
    <a href="/login" className='underline' target="_blank" rel="noopener noreferrer">add shop item</a>
  </aside> 
  <nav>
    <h6 className="footer-title">Contact Developer</h6> 
    <div className="grid grid-flow-col gap-4">
  <a href='https://github.com/yuvraj7000' target="_blank" rel="noopener noreferrer">
  <svg height="24" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="fill-current">
    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
</svg>
  </a>
  <a href='https://www.linkedin.com/in/yuvraj7000' target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v5.5h-3v-10h3v1.5c.878-.684 2.022-1.5 3.5-1.5 2.481 0 4.5 2.019 4.5 4.5v5.5z"></path>
    </svg>
  </a>
  <a href='mailto:yuvraj7000raju@gmail.com'>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
      <path d="M20 4h-16c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm0 2v.511l-8 5.489-8-5.489v-.511h16zm-16 12v-9.489l7.293 5.016c.391.269.902.269 1.293 0l7.293-5.016v9.489h-16z"></path>
    </svg>
  </a>
</div>
<a href="https://yuvrajyadav.tech" className='underline' target="_blank" rel="noopener noreferrer">
          yuvrajyadav.tech
        </a>
  </nav>
  <nav>
    <h6 className="footer-title">Support</h6> 
    <a className="link link-hover">codedeck@test.com</a>
    <a className="link link-hover">+99 999 999 999</a>
  </nav> 
  <form onSubmit={handleSubscribe}>
    <h6 className="footer-title">Newsletter</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input 
            type="email" 
            placeholder="username@site.com" 
            className="input input-bordered join-item"     
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required/> 
        <button type="submit" className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
  )
}

export default Footer