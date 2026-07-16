import { createContext, useContext, useState } from "react";
import { ELECTRONICS_PRODUCTS } from "../data/electronicsProducts";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(ELECTRONICS_PRODUCTS)

    const fetchAllProducts = async () => {
        setData(ELECTRONICS_PRODUCTS)
    }

    const getUniqueCategory = (data, property) =>{
        let newVal = data?.map((curElem) =>{
            return curElem[property]
        })
        newVal = ["All",...new Set(newVal)]
        return newVal
      }
    
      const categoryOnlyData = getUniqueCategory(data, "category")
      const brandOnlyData = getUniqueCategory(data, "brand")
    return <DataContext.Provider value={{ data, setData,fetchAllProducts, categoryOnlyData, brandOnlyData }}>
        {children}
    </DataContext.Provider>
}

export const getData = ()=> useContext(DataContext)
