import "../App.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" >
          <div class="container-fluid">
          <Link className="navbar-brand" to="/">KIWI</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                <Link className="nav-link" to="/menu">Menu</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
    );
    }