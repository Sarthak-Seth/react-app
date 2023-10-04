// import { Fragment } from "react";
import { MouseEvent } from "react";
function ListGroup() {
  const items = ["New York", "San Francisco", "Tokya", "London", "Paris"];

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, idx) => (
          <li className="list-group-item active" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
