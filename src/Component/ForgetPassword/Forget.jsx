import React from 'react';
import BlogHead from '../Blog/BlogHead/BlogHead';
import './Forget.css'

const Forget = () => {

    let [email, efunc] = React.useState('')
    let alert = document.getElementById("alert")
    let message = document.getElementById("message")

    const handleForget = async (e) =>{
        e.preventDefault()
        let result = await fetch('https://mysterious-waters-58153.herokuapp.com/api/v1/auth/generatetoken',{
            method:'post',
            credencials: 'include',
            body:JSON.stringify({email}),
            headers: {
                'content-Type': 'application/json'
            }
        })
        result = await result.json()
        console.warn(result)
        console.log(result)
        console.log(email)
        
        if( result.success === true){
            message.innerHTML=`${result.msg}`
            message.style.color="green"
            message.style.textAlign="center"
            message.style.textTransform="lowercase"
            localStorage.setItem('reset', result.token)

            alert.style.display="flex"
            alert.style.backgroundColor="#a0f7a0"
            alert.style.border="1px solid green"
        }else if(result.success === false ){
            message.innerHTML=`${result.error}`
            message.style.color="red"
            message.style.textAlign="center"
            message.style.textTransform="lowercase"

            alert.style.display="flex"
            alert.style.backgroundColor="#f79494"
            alert.style.border="1px solid red"
        }

        // alert("hello working")
        // console.log("hello am working")
    }

    return(
        <>
            <BlogHead 
                title="Forget Password"
                nav1="Home"
                nav2=" Forget Password"
                link="/forget"
                link2="/"
            />
            <div className="forget">
                <div className="sub-forget">
                    <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
                    <form onSubmit={handleForget}>
                        {/* <label>Input your email</label> */}
                        <input type="email" value={email} onChange={(e) => efunc(e.target.value)} placeholder="Input your email" />
                        <input className='submit' type="submit" value="Reset Password" />
                        <div id='alert' className="alert">
                            <span id='message'></span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


// https://mysterious-waters-58153.herokuapp.com/api/v1/auth/generatetoken
// if( result.success === true){
//     message.innerHTML=`${result.msg}`
//     message.style.color="green"
//     message.style.textAlign="center"
//     message.style.textTransform="lowercase"
//     localStorage.setItem('reset', result.token)

//     alert.style.display="flex"
//     alert.style.backgroundColor="#a0f7a0"
//     alert.style.border="1px solid green"
// }else if(result.success === false ){
//     message.innerHTML=`${result.error}`
//     message.style.color="red"
//     message.style.textAlign="center"
//     message.style.textTransform="lowercase"

//     alert.style.display="flex"
//     alert.style.backgroundColor="#f79494"
//     alert.style.border="1px solid red"
// }
export default Forget;