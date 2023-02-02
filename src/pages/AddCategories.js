import React, { useRef, useState } from "react";
import "../styles/AddCategories.css";

function AddCategories() {
  //First we have data in list 
  const list = [
    {
      id: 1,
      name: "HP",
      category: "car",
      created_date: "1-2-19",
    },
    {
      id: 2,
      name: "Dell",
      category: "Book",
      created_date: "1-2-19",
    },
    {
      id: 3,
      name: "Dell",
      category: "Book",
      created_date: "1-2-19",
    },
    {
      id: 4,
      name: "Dell",
      category: "Book",
      created_date: "1-2-19",
    },
    {
      id: 5,
      name: "Dell",
      category: "Book",
      created_date: "1-2-19",
    },
    {
      id: 6,
      name: "Dell",
      category: "Book",
      created_date: "1-2-19",
    },
    {
      id: 7,
      name: "Dell",
      category: "Book",
      created_date: "1-2-19",
    },
    {
      id: 8,
      name: "Dell",
      category: "Book",
      created_date: "1-2-19",
    },
    {
      id: 9,
      name: "Dell",
      category: "Book",
      created_date: "1-2-19",
    },
    {
      id: 10,
      name: "Dell",
      category: "Book",
      created_date: "1-2-19",
    },
  ];

  //List and then we set lists to change it
  //update state to set state in to change it 
  const [lists, setList] = useState(list);
  const [updateState, setUpdateState] = useState(-1);
  return (
    <div className="categories">
      <div className="categories__wrapper">
        <h2 className="categories__title">Add Categories</h2>
      
{/*To add list
//The things we add in list should be stored in set list*/}
        <AddList setList={setList} />
        
        <form onSubmit={handleSubmit}>
          <table>
          <thead className="heading">
                  <tr>
                     
                    <td>Id</td>
                    <td>Category</td>
                    <td>Created Date</td>
                    <td>Action</td>
                    
                  </tr>
                </thead>
{/* jo list hum ne wahan use ki ha lists lain gy */}
            {lists.map((current,key) =>
              updateState === current.id ? (
                <EditList current={current} lists={lists} setList={setList} />
              ) : (
                <tbody>
                  <tr key={key}>
                     
                    <td>{current.name}</td>
                    <td>{current.category}</td>
                    <td>{current.created_date}</td>
                    <td>
                      <button
                        className="edit"
                        onClick={() => handleEdit(current.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete"
                        type="button"
                        onClick={() => handleDelete(current.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              )
            )}
          </table>
        </form>
      </div>
    </div>
  );
//function to edit and then edited value is stored in setupdate state
  function handleEdit(id) {
    setUpdateState(id);
  }
  //to del and then filter, we create new list= lists ma se filter krein gy list item and then list id 
  function handleDelete(id) {
    const newlist = lists.filter((li) => li.id !== id);
    setList(newlist);
  }
  function handleSubmit(event) {
    //to not change it on default and take time
    event.preventDefault();
    const name = event.target.elements.name.value;
    const category = event.target.elements.category.value;
    const created_date = event.target.elements.created_date.value;
    const newlist = lists.map((li) =>
      li.id === updateState
        ? { ...li, name: name, created_date: created_date, category: category }
        : li
    );

    setList(newlist);
    setUpdateState(-1);
  }
}
//for edit current, lists and setlists etc.
function EditList({ current, lists, setList }) {
  function handInputname(event) {
    const value = event.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, name: value } : li
    );

    setList(newlist);
  }

  function handInputcategory(event) {
    const value = event.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, category: value } : li
    );

    setList(newlist);
  }

  function handInputcreated_date(event) {
    const value = event.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, created_date: value } : li
    );

    setList(newlist);
  }

  return (
    <tr>
      <td>
        <input
          type="text"
          onChange={handInputname}
          name="name"
          value={current.name}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handInputcategory}
          name="category"
          value={current.category}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handInputcreated_date}
          name="created_date"
          value={current.created_date}
        />
      </td>
      <td>
        <button type="submit">Update</button>
      </td>
    </tr>
  );
}
//To add list
function AddList({ setList }) {
  const nameRef = useRef();
  const categoryRef = useRef();
  const created_dateRef = useRef();
  //To submit when we handle submit

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const category = event.target.elements.category.value;
    const created_date = event.target.elements.created_date.value;
    const newlist = {
      id: 11,
      name,
      category,
      created_date,
    };
    setList((prevList) => {
//prev list +new list
      return prevList.concat(newlist);
    });
    nameRef.current.value = "";
    categoryRef.current.value = "";
    created_dateRef.current.value = "";
  }
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter Name"
       ref={nameRef} />
       <br/>
      <input
        type="text"
        name="category"
        placeholder="Enter Category"
        ref={categoryRef}
      /> 
      <br/>
      <input
        type="text"
        name="created_date"
        placeholder="Enter created_date"
        ref={created_dateRef}
      />
      <br/>
      <button className="btn btn-primary "type="submit">Add Category</button>
    </form>
  );
}

export default AddCategories;
