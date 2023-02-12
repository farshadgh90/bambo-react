import Button from "../button";

export default function CoursePagination() {
  return (
    <div className="flex justify-center">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li className="page-item">
            <Button
              className="page-link relative block py-1.5 px-5 m-5 border-0  outline-none coursesBtn  primary-btn transition-all duration-300"
              href="#"
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </Button>
          </li>
          <li className="page-item">
            <Button
              className="page-link relative block py-1.5 px-5 border-0 m-5 outline-none coursesBtn  primary-btn transition-all duration-300"
              href="#"
            >
              1
            </Button>
          </li>
          <li className="page-item">
            <Button
              className="page-link relative block py-1.5 px-5 border-0 m-5 outline-none coursesBtn  secondary-btn transition-all duration-300"
              href="#"
            >
              2
            </Button>
          </li>
          <li className="page-item">
            <Button
              className="page-link relative block py-1.5 px-5 border-0 m-5 outline-none coursesBtn  secondary-btn transition-all duration-300"
              href="#"
            >
              3
            </Button>
          </li>
          <li className="page-item">
            <Button
              className="page-link relative block py-1.5 px-5 border-0 m-5 outline-none coursesBtn  primary-btn transition-all duration-300"
              href="#"
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
