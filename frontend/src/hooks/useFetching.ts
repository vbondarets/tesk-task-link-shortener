import { useState } from "react"

export const useFetching = (callback: (args?: any) => Promise<void>) => {
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args: any) => {
        try{
            setIsLoading(true);
            await callback(...args);
        }
        catch (err: any){
            console.log(err);
            setError(err.response.data.message);
            setTimeout(()=> {setError('')}, 2000)
        }
        finally{
            setIsLoading(false);
        }
    }
    return [fetching, isloading, error] as const
}