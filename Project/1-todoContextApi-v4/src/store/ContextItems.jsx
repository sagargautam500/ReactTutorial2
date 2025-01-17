/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { createContext } from 'react'

export const ContextItem = createContext();

export default function ContextItems({ children, listItems, handleDeleteButton, handleAddButton, text, date }) {
  return (
    <>
      <ContextItem.Provider
        value={{ listItems, handleDeleteButton, handleAddButton, text, date }}
      >
        {children}
      </ContextItem.Provider>
    </>
  )
}

export const ItemContext = createContext();