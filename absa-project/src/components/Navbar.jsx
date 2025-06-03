import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./Navbar/ResponsiveMenu";
import { NavLink , Link} from "react-router";

export default function Navbar() {
  const [open, setOpen] = useState(true);


  return (
    <>
      <nav>
        <div className="container mx-auto flex justify-between items-center py-5 px-16">
          <div>Minana</div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
             
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/product">Products</Link>
                </li>
                <li>
                  <Link to="/testimonials">Testimonials</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              
            </ul>
          </div>
          {/* hamburgar */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
}
