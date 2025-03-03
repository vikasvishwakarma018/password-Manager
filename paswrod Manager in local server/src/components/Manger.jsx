import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import uuid4 from "uuid4";
const Manger = () => {
    const ref = useRef();
    const passwordRef = useRef();
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([]);
    // const passwordRef = useRef()

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])


    const showpassword = () => {
        passwordRef.current.type = "text"
        if (ref.current.src.includes("icons/eyecross.png")) {
            passwordRef.current.type = "password"
            ref.current.src = 'icons/eye.png'
            toast('show your password !!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
           
          
        }
        else {
            passwordRef.current.type = "text"
            ref.current.src = "icons/eyecross.png"
        }
    }


    const savePassword = () => {
        if(form.site.length > 3 && form.username.length > 3 && form.password.length > 3){

            setpasswordArray([...passwordArray, {...form , id :uuid4()}]);
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form , id :uuid4()}]))
            console.log(passwordArray)
            setform({ site: "", username: "", password: "" })
            toast('save your password !!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            
        }
        else{
            toast('Please Enter the valid passwrod !')
        }
    }


    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handleEdit = (id) => {
       setform(passwordArray.filter(i=>i.id===id)[0])
       setpasswordArray(passwordArray.filter(i=>i.id!=id))
       toast('Edit again your password !', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
  
  
      
    }
    
    const handleDelte = (id) => {
        let c = confirm("Do you realy want to delete this password ")
        if(c){
      setpasswordArray([...passwordArray.filter(item=>item.id !==id)])
      localStorage.setItem("passwords" , JSON.stringify([...passwordArray.filter(item=>item.id !==id)]))
      toast('Password Deleted!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    }
  
}
    

    return (
        <>

        {/* this is the tosted enemination for uing for the code and enimated sidebar display 
     */}

<ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />

            <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
           

            <div className="md:mycontainer min-h-[88.2vh]">
              
                <div className="text-white flex flex-col items-center ">
                    <h1 className='flex gap-0.5  font-bold text-center text-3xl ' >

                        <span className='text-3xl text-indigo-500'>&lt;</span>
                        <span>Pass</span>
                        <span className='text-3xl text-indigo-500'>OP/&gt;</span>
                    </h1>
                    <p>Your own Password Manager</p>
                    <input value={form.site} onChange={handlechange} placeholder='Enter Website URL' type="text" className='text-black border-2 py-0.5 border-blue-950 gap-0.5 bg-white space-x-1.5 rounded-full w-full' name="site" id="site" />

                    <div className="md:flex-row flex-col flex gap-3 mx-2 w-full justify-center py-1.5  ">

                        <input value={form.username} onChange={handlechange} placeholder='Enter Username ' type="text" className='text-black px-20 py-1.5 border-2 gap-0.5 bg-white space-x-1.5 rounded-full' name="username" id="username" />

                        <input ref={passwordRef} value={form.password} onChange={handlechange} placeholder='Enter Password' type="passwrod" className=' text-black px-20 border-2 gap-0.5 bg-white space-x-1.5 rounded-full ' name="password" id="password" />
                        <span className='md:absolute lg:absolute md:right-[23%] 2xl:right-[23%] 2xl:top-[35%] flex'>
                            <img onClick={showpassword} ref={ref} className='p-1' width={40} src="icons/eye.png" alt="eye" />
                        </span>

                    </div>

                    <button onClick={savePassword} className='rounded-full px-6  border border-blue-400 gap-2 flex text-black  hover:bg-green-400 bg-green-600  py-1.5 my-4 justify-center items-center w-fit ' ><script src="https://cdn.lordicon.com/lordicon.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>Save Password</button>

                    <div className="passwords"></div>
                    <h2 className='font-bold text-2xl py-4 text-indigo-500'>Your <span className='text-indigo-300'>Passwords</span> </h2>
                    {passwordArray.length === 0 && <div className='font-bold text-lg text-purple-700'>No <span className='text-purple-400'>Password</span> <span className='text-purple-500'> to Show </span></div>}
                    {passwordArray.length != 0 && <table className="table-auto w-2/3 rounded-2xl overflow-hidden">
                        <thead className='text-white bg-blue-950'>
                            <tr className='my-2.5'>
                                <th className='py-2 text-center px-2 mx-2'>Site</th>
                                <th className='py-2 text-center px-2 mx-2'>Username</th>
                                <th className='py-2 text-center px-2 mx-2'>password</th>
                                <th className='py-2 text-center px-2 mx-2'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='bg-purple-300 text-black'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='py-2 text-center w-[35%]  hover:text-blue-800 hover:underline hover:font-bold'><a href="item.site" target='/blank'>{item.site}</a></td >

                                    <td className='py-2 text-center w-[25] '>{item.username}</td >

                                    <td className='py-2 text-center w-[25] '>{item.password}</td >

                                    <td className='py-2 text-center w-[25]  '>
                                        <span className=' justify-center items-center gap-3 flex'>
                                            <div className="edit cursor-pointer" onClick={()=>handleEdit(item.id)}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/gwlusjdu.json"
                                                    trigger="hover"
                                                   stroke = "bold"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </div>

                                            <div className="delet cursor-pointer " onClick={()=>handleDelte(item.id)}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                    stroke="bold"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </div>
                                        </span>
                                    </td >
                                </tr>
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>
<br />
        </>

    )
}

export default Manger
