function Contact(){

    //state
    const [formState, setFormState] =useState({name: '', email: '', message: ''})
    const [errorMessage, setErrorMessage] = useState('')
    const {name, email, message} = formState;

    //handle submission erros
    const submitHandler = (e) => {
        if(!errorMessage){
            console.log('Submit Form', formState)
        }
    };

    //handle validations
    const handleChanges = (e) => {
        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
            //if not valid
            if(!isValid){
                setErrorMessage('Email is not valid. Please enter a valid Email.')
            }
            else {
                setErrorMessage('');
            }
        } else {
            if(e.target.value.length){
                setErrorMessage(`${e.target.name} is required`);
            } else{
                setErrorMessage('');
            }
        }
        if(errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value});
            console.log('Handle Form', formState);
        }
    }



    return(
       <section>
           <h1>Contact Me Below!</h1>
           <form id = "contact-form" onSubmit={submitHandler}>
                <div>
                    <label>What is your name?</label>
                    <input type="text" name="name" defaultValue={name}/>
                </div>

                <div>
                    <label>Enter Your Email Address</label>
                    <input type="email" name="email" defaultValue={email}/>
                </div>

                <div>
                    <label>Your Inquiry</label>
                    <textarea name="message" rows="4" defaultValue={message} />
                </div>
                <button type="submit">Submit</button>
           </form>
       </section>
    )
}


export default Contact;