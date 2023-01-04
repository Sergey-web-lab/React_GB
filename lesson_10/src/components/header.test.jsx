import React from "react";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Header } from "./Header";

describe('testing Header', () => {
    it('render Header', () => {
        render(<header></header>)
    })
    it('render multiply component', () => {
        render(
            <>
                <header></header>
                <header></header>
            </>
        )
        expect(screen.queryAllByRole('Header').length).toBe(2)
    })
})