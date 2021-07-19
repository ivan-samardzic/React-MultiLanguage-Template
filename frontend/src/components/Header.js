import React, { Component, Suspense } from 'react'
import Hello from './Hello'
import ThankYou from './ThankYou'
import LanguageSelector from './LanguageSelector'
const Header = () => {
    return (
        <div className='d-flex flex-row align-items-center justify-content-center bg-primary p-3'>
            <Suspense fallback={null}>
            <LanguageSelector />
            <div>
            <Hello />
            <ThankYou />
            </div>
            </Suspense>
        </div>
    )
}

export default Header