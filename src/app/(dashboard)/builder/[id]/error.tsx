"use client"
import clsx from 'clsx'
import React, {useEffect} from 'react'

function ErrorPage({error}:{error: Error}) {

    useEffect(() => {
        console.log(error);
    }, [error]);
    
  return (
    <div>error</div>
  )
}

export default ErrorPage