import { useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import LinkSevice from './services/Link.service';
import { useFetching } from './hooks/useFetching';

function App() {
  const [oldLink, setOldLink] = useState("");
  const [newLink, setNewLink] = useState("");
  const [copyButtonText, setCopyButtonText] = useState("Copy");
  const [fetchLink, isLoading, linkError] = useFetching(async (link) => {
    const result = await LinkSevice.shortify(link);
    setNewLink(result.newLink)
  })

  async function shortify (link: string){
    fetchLink(link)
  }

  return (
    <>
      <h1
        className="font-bold text-blue-600 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
      >
        Link Shortener
      </h1>
      { isLoading &&
         <Loader/>
      }
      { linkError &&
      <>
         <p className='mt-4 text-3xl text-red-700'>{linkError.split(':').slice(-1)}</p>
      </>
      }
      {newLink 
        &&
          <div className='w-full h-fit flex flex-row justify-center mt-3'>
            <input
              className='mt-5 p-2 rounded-md'
              value={newLink}
              onChange={(e) => setOldLink(e.target.value)}
              type='text'
              placeholder='Your link'
              disabled= {true}
            />
            <button
              className='mt-5 w-fit rounded-full ml-2'
              onClick={() => {
                navigator.clipboard.writeText(newLink);
                setCopyButtonText("Copied!");
                setTimeout(() => setCopyButtonText("Copy"), 1500)
              }}
            >
              {copyButtonText}
            </button>
          </div>
      }
      <div className='w-full h-fit flex flex-col'>
        <p className='text-3xl text-blue-300 mt-20'>Past your link</p>
        <input
          className='mt-5 p-2 rounded-md'
          value={oldLink}
          onChange={(e) => setOldLink(e.target.value)}
          type='text'
          placeholder='Your link'
        />
        <button
          className='mt-5'
          onClick={() => {
            oldLink ? shortify(oldLink) : alert("Fill the field")
          }}
        >
          Shortify
        </button>
      </div>

    </>
  )
}

export default App
