import React, { useState, useEffect } from "react";
import CardComponent from "./card";
import { Character } from "../types/characterType";
import ButtonComponent from "./button";
import { Spinner } from "../utils/styles";

const CharactersPage = () => {
  const [chars, setChars] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1)
  const [previous, setPrevious] = useState<string>();
  const [next, setNext] = useState<string>();
  const [spinner, setSpinner] = useState(false)
  

  useEffect(() => {
    setSpinner(true)
    fetch(`https://swapi.dev/api/people/?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setPrevious(data.previous)
        setNext(data.next)
        setChars(data.results)
        setSpinner(false)
       
      },);
  },[page]);

  const handlePreviousPage=()=>{
    if(previous !== null){
      const number = Number( previous?.split('=')[1])
      setPage(number)
    }else{
      setPage(page)
    }
  }

  const handleNextPage=()=>{
    if(next !== null){
      const number = Number( next?.split('=')[1])
      setPage(number)
    }else{
      setPage(page)
    }
  }

  const handleReset=()=>{
   setPage(1)
  }



  return(
    <div className="col-12 d-flex justify-content-center">
      <div className="col-md-12 row h-100 mt-4 pb-5">
        <h1 className="h6 text-center mb-2  headline">WARRIORS</h1>

        {spinner && <Spinner/>}
        {!spinner && chars.map((char:Character, index:number)=> <CardComponent props={char} key={index}/>)}
        
       
    </div>
    <div className="d-flex justify-content-center align-items-center mb-2 fixed-bottom">
      <ButtonComponent bgcolor={'#0000ff'} color={'yellow'} children={'Previous Page'} onClick={()=>{handlePreviousPage()}} disabled={previous === null? true:false}/>
      <ButtonComponent bgcolor={'#00FF00'} color={'#000'} children={'First Page'} onClick={()=>{handleReset()}} disabled={false}/>
      <ButtonComponent bgcolor={'#ff0000'} color={'#fff'} children={'Next Page'} onClick={()=>{handleNextPage()}} disabled={next === null? true:false} />
      
    </div>
    </div>
  )
};


export default CharactersPage
