"use client"

import { Provider } from "react-redux"
import { store } from "@/lib/store"
import React from "react"

interface MyComponentProps {
    children?: React.ReactNode;
};

export function Providers({ children }: MyComponentProps) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}