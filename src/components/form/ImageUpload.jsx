'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Upload, X } from 'lucide-react'
import Image from 'next/image'
import { useFormContext } from 'react-hook-form'

export default function ImageUpload({ name = 'image', onChange ,imageUrl=null}) {
  const formContext = useFormContext()
  const { setValue, watch } = formContext || {}
  const [image, setImage] = useState(imageUrl || null)
  const fileInputRef = useRef(null)
  const watchedImage = formContext ? watch?.(name) : null


  const handleFileSelect = (e) => {
    const file = event.target.files?.[0]
    console.log(file)
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result
        if (!result) return
        console.log(result)
        setImage(result)
        setValue(name, file)
        onChange?.(file)
      }
      reader.readAsDataURL(file)
    }
   
  };

  const handleUpload = (event) => {
    console.log('hello')
    if (!event?.target || !setValue) return
    
    const file = event.target.files?.[0]
    console.log(file)
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result
        if (!result) return
        console.log(result)
        setImage(result)
        setValue(name, file)
        onChange?.(file)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  const handleDrop = (event) => {
    event.preventDefault()
    if (!setValue) return

    const file = event.dataTransfer.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result
        if (!result) return

        setImage(result)
        setValue(name, file)
        onChange?.(file)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemove = () => {
    if (!setValue) return
    
    setImage(null)
    setValue(name, null)
    onChange?.(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className={`relative border-2 border-dashed rounded-lg p-4 transition-all ease-in-out duration-200 ${
          image ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          ref={fileInputRef}
          className="hidden"
          id="image-upload"
        />
        <label
          htmlFor="image-upload"
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          {image ? (
            <div className="relative w-full h-48">
              <Image
                src={image}
                alt="Uploaded image"
                layout="fill"
                objectFit="contain"
                className="rounded-lg py-8"
              />
              <button
                onClick={handleRemove}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <>
              <Upload size={48} className="text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Click or drag and drop to upload an image</p>
            </>
          )}
        </label>
      </div>
    </div>
  )
}


