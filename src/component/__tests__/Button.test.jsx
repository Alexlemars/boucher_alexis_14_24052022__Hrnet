import {render , screen , cleanup, fireEvent} from '@testing-library/react'
import  renderer  from 'react-test-renderer';
import Button from "../button/Button";

afterEach(()=>{
    cleanup();
})

test("should render value Button component" , ()=>{
    render(<Button value="Button"/>)
    const buttonElement = screen.getByTestId("button-Button")
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveTextContent("Button")
})

test("should render not value Button component" , ()=>{
    render(<Button value="" />)
    const buttonElement = screen.getByTestId("button-")
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).not.toHaveTextContent("Button")
})
test("should call onclick" , ()=>{
    const clickOfTheButton = jest.fn();
    render(<Button value="" onClick={clickOfTheButton} />)
    fireEvent.click(screen.getByTestId('button-'));
    expect(clickOfTheButton).toHaveBeenCalled()
})
test('matches snapshot',()=>{
    const tree = renderer.create(<Button value="Button Value" />).toJSON
    expect(tree).toMatchSnapshot()
})

