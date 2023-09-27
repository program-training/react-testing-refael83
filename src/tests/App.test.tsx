import { getByAltText, getByText, render, screen } from "@testing-library/react"
import { userEvent } from '@testing-library/user-event'
import { Home } from "../components/Example/HOME/Home"

describe("Home", () => {
    test("form test", () => {
    render(<Home />)
    const formElement = screen.getByTestId('form')
    expect(formElement).toBeInTheDocument()
    })

    test("qr test",async()=>{
        const user=userEvent.setup()
        render(<Home />)
        screen.debug()
        const submitElement=screen.getByTestId('submit')
        const qrImage ="https://api.qrserver.com/v1/create-qr-code/?data=https://chat.openai.com/c/40e5b10e-e845-49f2-86c5-4c5ac6d9b215&size=[200]x[200]"
        const inputElement=screen.getByTestId('input')
        await userEvent.type(inputElement,'https://chat.openai.com/c/40e5b10e-e845-49f2-86c5-4c5ac6d9b215')
        await user.click(submitElement)
       const qrContainer=screen.getByTestId('qr')
        
        expect(inputElement).toBeInTheDocument()
        expect(qrContainer).toBeInTheDocument()
    })
    })