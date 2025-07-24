import { createContext, useContext, useEffect, useState } from "react";

const ContactContext = createContext();

export const ContactUsProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const[contact, setContact]=useState([])

    const postContact = async (data) => {
        setLoading(true)
        try {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
            const res = await fetch("http://localhost:3000/contactus/contact",options);
             if(res){
                setLoading(false)
                const response = await res.json()
                setContact(response);

             }
             else{
                console.log("something is", res);
             }
        }catch(e){
            console.log("Error in Fetching data",e);
        }
    }

   

    return(
        <ContactContext.Provider value={{contact, postContact}}>
            {children}
        </ContactContext.Provider>
    )

}
export const useContact =()=>{
    const context = useContext(ContactContext);
    if(!context){
        throw new Error("contactus context not found")
    }
    return context;
}

