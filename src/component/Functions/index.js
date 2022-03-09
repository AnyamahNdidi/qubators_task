import * as api from "../API/index"

const allData = async() =>{
  try{
  const {data} =  await api.myall()
  return data
 

  }catch(error){
   console.log(error)
  }
}

const searchInput = async() =>{
  try{
  const {data} =  await api.mySearch()
  return data

  }catch(error){
   console.log(error)
  }
}

export {allData, searchInput}