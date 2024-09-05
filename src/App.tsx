import { ChangeEvent } from 'react'
import './App.css'

/* interface CardProps {
  text: string
  title: string
} */

const template = {
  text: "ei tekstiä",
  title: "ei titleä"
}  

type CardProps = typeof template

//type CardProps = { text: string, title: string}  

//function Card({ text }:{ text: string }) {
function Card({ text, title }:CardProps) {

  return <div style={{
    backgroundColor: "coral",
    marginBottom: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }}>

    <h2>{ title }</h2>

    { text }

  </div>
}

function FileUpload(){
  
  const onFileUploaded = async (e:ChangeEvent<HTMLInputElement>) => {

    const [file] = e.currentTarget.files!

    const fileTextContent = await file.text()


    console.log(fileTextContent)

  }

  return <>
  
  <div>
    <input onChange={onFileUploaded} type="file" />
    <div></div>
  </div>
  
  </>
}

function App() {
  
  return (
    <>
      
      <h1>Fullstack 1</h1>
      <FileUpload></FileUpload>
      <Card text={'laatikko 1'} title={'#1'}></Card>
      <Card text={'laatikko 2'} title={'#2'}></Card>
      <Card text={'laatikko 3'} title={'#3'}></Card>

    </>
  )
}

export default App
