export const Task = (props) => {
    return (            
        <div className="container text-warning d-flex justify-content-between">
            <div>
                <h3 className={props.status===true? "bg-success text-light" : "bg-light"}>{props.name}</h3>
            </div>
            <div>
            <button class="btn btn-success m-2" type="button" onClick={() => props.completeTask(props.id)}>Complete</button>
            <button class="btn btn-danger m-2" type="button" onClick={() => props.deleteTask(props.id)}>Delete</button>
            </div>
        </div>
      );
}