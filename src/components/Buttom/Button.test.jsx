import { fireEvent, screen } from "@testing-library/react"
import { renderTheme } from "../../common/theme/render-theme"
import { Buttom } from "./button"

describe('<Button/>',()=>{

it("should render button  with 'load more'",()=>{

renderTheme(<Buttom> Load more</Buttom>)

let button= screen.getByRole('button',{name:/load more/i})

expect(button).toBeInTheDocument()

});


it("should render button with function",()=>{
	let fn=jest.fn()


	renderTheme(<Buttom click={fn}> Load more</Buttom>)

let button= screen.getByRole('button',{name:/load more/i})

fireEvent.click(button)});




it("should render button with class name 'Button-home'",()=>{
	renderTheme(<Buttom className={'Button-home'}> Load more</Buttom>)

let button= screen.getByRole('button',{name:/load more/i})

	expect(button).toHaveClass('Button-home')

});








})

