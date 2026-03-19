export async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {

  const fallbackApiUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/';
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || fallbackApiUrl;
  const res = await fetch(`${apiUrl}${endpoint}`, {...options, cache: options?.cache || 'no-store',});

    if (!res.ok) {

      let errorMessage = `Failed to fetch data from ${endpoint}`;
       try{

        const errorData = await res.json();
        errorMessage = errorData.message || errorData.error || errorMessage;
       }catch (e){
        console.log(e);
       }

       throw new Error(errorMessage);

       }

       return res.json();
    }


  