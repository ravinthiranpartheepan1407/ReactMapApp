import { render, screen } from '@testing-library/react';
import App from './App';
import Maps from './map';
import MyGoogleMap from './googlemap';

describe("Title", ()=>{
  test('Have Text Horizon App', ()=>{
    render(<Maps />)
    const title = screen.getByText('Horizon App');
    expect(title).toBeInTheDocument();
  });
  test("App Test Two should have post code status", ()=>{
    render(<MyGoogleMap />)
    const title = screen.getByText('Post Code');
    expect(title).toBeInTheDocument();
  });
})


describe("NavLink", ()=>{

});
