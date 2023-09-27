import { useState,FormEvent } from "react";

export function Home():JSX.Element{
    const [url,setUrl]=useState<string>("")
    const [qr,setQr]=useState<string>('')
    const [data,setData]=useState<Boolean>(false)
    const [date,setDate]=useState<Date>(new Date())

    function changeValue(valoue:string){
        setUrl(valoue)
    }

    const handleSubmit =async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
        let response= await fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=[200]x[200]`)
        setDate(new Date())
        setQr(response.url )
        }
        catch(error){
           console.error(error)
        }
            
            
            
    }
    return (
        <div >
            <form data-testid="form" onSubmit={handleSubmit}>
                <input
                data-testid="input"
                type='url'
                name='myUrl'
                value={url}
                onChange={(e)=>changeValue(e.target.value)}
                ></input>
                <input data-testid='submit' type='submit'></input>
            </form>
           {qr&&<img
           data-testid='qr'
           src={qr} 
           alt='my-qr'> 
           </img>}
           <button data-testid="data" onClick={()=>{setData(!data)}}>data</button>
           {data && <p>{date.toLocaleString()}</p>}
        </div>
    )
}