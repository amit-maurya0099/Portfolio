import React,{useRef, useState} from 'react'
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {

  
     const service_Id=import.meta.env.VITE_SERVICE_ID;
     const template_Id=import.meta.env.VITE_TEMPLATE_ID;
     const public_key=import.meta.env.VITE_PUBLIC_KEY;
   
     const form = useRef();
  
     const sendEmail = (e) => {
       e.preventDefault();
   
       emailjs
         .sendForm(service_Id, template_Id, form.current, {
           publicKey:public_key
         })
         .then(
           () => {
             
             toast.success("Email sent successfully")
             form.current.reset();
            
           },
           (error) => {
            toast.error("Error occured!")
           },
         );
     };


  
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full ">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
        <form className='md:w-[50%] flex flex-col gap-8' ref={form} onSubmit={sendEmail}>
          <div className=' flex flex-col md:flex gap-6'>
            <div className='flex flex-col gap-3 text-lg mt-6 w-full mx-3 '>
              <label >Name</label>
              <input className='w-[330px]  md:w-full border rounded-lg text-black pl-2 outline-none bg-slate-200' placeholder='Amit Maurya' type="text" name="user_name" ></input>
            </div>
            <div className='flex flex-col gap-3 text-lg w-full mx-3 '>
              <label>Email</label>
              <input className='w-[330px] md:w-full border rounded-lg text-black pl-2 outline-none bg-slate-200' placeholder='amit@gmail.com'  type="email" name="user_email" ></input>
            </div>
          </div>
          <div className='flex flex-col text-lg gap-3 '>
            <label className='pl-3'>Textarea</label>
            <textarea placeholder='Enter your Message' className='pl-2 ml-2 outline-none rounded-lg bg-slate-200 text-black h-[200px] w-[330px] md:w-full'  name="message" ></textarea>
          </div>
          <div className='flex justify-center mt-4 md:ml-2'>
          <button className='w-[90%] md:w-[100%] py-2 bg-designColor text-black text-lg rounded-lg text-center' type="submit">Submit</button>
          </div>
          
          
        </form>
      
          
        </div>
      </div>
    </section>
  );
}

export default Contact