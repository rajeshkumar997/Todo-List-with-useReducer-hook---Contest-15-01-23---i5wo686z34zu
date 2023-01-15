import React from "react";
const Todo = ({ dispatch, state }) => {

  console.log("state is ",state);
  return (

          <>
            {state.map((item) => {
              
              return (
                <div className="todo" key={item.id}> 
                
                  <div id={item.id} className="todo-title">
                  {item.title}
                  <button
                    onClick={() =>
                      dispatch({ type: "DELETE",payload:{title:item.title,id:item.id} })
                    }
                    className="todo-delete"
                  >
                    DELETE
                  </button>
                </div>
                
                </div>
              );
            })}
            </>
  );
};

export { Todo }
