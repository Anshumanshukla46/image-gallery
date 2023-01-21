import React, { useState, useEffect } from "react"
// useState and useEffect are hooks and will be used as state variable

export default function App() {

  const [images, setImages] = useState([]); // good to destruct the whole
  const [isLoading, setIsLoading] = useState(true); // in bracket their is default value
  const [term, setTerm] = useState('');

  // The Fetch API through the fetch() method allows us to make an HTTP request to the backend. With this method, we can perform different types of operations using HTTP methods like the GET
  useEffect(() => {

    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits)
        setIsLoading = false
      })
      .catch(err => { console.log(err) })
  }, [])  // DependencyList




  // creating card 
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      hello
      <img src="https://source.unsplash.com/random" className="w-full" />

      <div className="px-6 py-4">

        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo By John Doe
        </div>

        {/* infomation */}
        <ul>
          <li>
            <strong>Views: </strong>
            4000
          </li>

          <li>
            <strong>Download: </strong>
            343
          </li>

          <li>
            <strong>Likes: </strong>
            23190
          </li>
        </ul>

      </div>

      {/* tags */}
      <div className="px-6 py-4">

        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>

        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag2
        </span>

        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag3
        </span>


      </div>

    </div>
  )
}