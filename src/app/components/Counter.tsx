"use client"

import { decrement, increment } from '@/lib/features/counterSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const count = useSelector((state: { counter: { value: number } }) => state.counter.value)
    const dispatch = useDispatch();
    return (
        <>
            <div>
                Counter Component
                <h1>{count}</h1>
                <button onClick={() => { dispatch(increment()) }}>+</button>
                <button onClick={() => { dispatch(decrement()) }}>-</button>
            </div>
        </>
    )
}

export default Counter