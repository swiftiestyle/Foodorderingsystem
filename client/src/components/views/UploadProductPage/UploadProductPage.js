import React, { useState } from 'react'
import { Typography, Button, Form, Input } from 'antd';
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';

const { TextArea } = Input;



const Continents = [
    { key: 1, value: "North Indian" },
    { key: 2, value: "South Indian" },
    { key: 3, value: "Soups" },
    { key: 4, value: "Salads" },
    { key: 5, value: "Rice" },
    { key: 6, value: "Starters" },
    { key: 7, value: "Deserts" }
]

function UploadProductPage(props) {
    
    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Price, setPrice] = useState(0)
    const [Continent, setContinent] = useState(1)
    const [Images, setImages] = useState([])

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value)
    }

    const priceChangeHandler = (event) => {
        setPrice(event.currentTarget.value)
    }

    const continentChangeHandler = (event) => {
        setContinent(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (!Title || !Description || !Price || !Continent || Images.length === 0) {
            return alert(" fill fields properly")
        }


       

        const body = {
            
            writer: props.user.userData._id,
            title: Title,
            description: Description,
            price: Price,
            images: Images,
            continents: Continent
        }

        Axios.post('/api/product', body)
            .then(response => {
                if (response.data.success) {
                    alert('success')
                    props.history.push('/')
                } else {
                    alert('try again')
                }
            })
    }

 return (
      
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2> Upload Food Items</h2>
          </div>

          <Form onSubmit={submitHandler}>
              {/* DropZone */}
              <FileUpload refreshFunction={updateImages} />

              <br />
              <br />
              <label>Title</label>
              <Input onChange={titleChangeHandler} value={Title} />
              <br />
              <br />
              <label>Description</label>
              <TextArea onChange={descriptionChangeHandler} value={Description} />
              <br />
              <br />
              <label>Price</label>
              <Input type="number" onChange={priceChangeHandler} value={Price} />
              <br />
              <br />
              <select onChange={continentChangeHandler} value={Continent}>
                  {Continents.map(item => (
                      <option key={item.key} value={item.key}> {item.value}</option>
                  ))}
              </select>
              <br />
              <br />
              <button type="submit">
                  Submit
              </button>
          </Form>


      </div>
  )
   
}

export default UploadProductPage
