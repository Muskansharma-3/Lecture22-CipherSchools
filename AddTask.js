const AddTask = () => {
    return (
        <>
        <h3 className="ui heading center">Add New Task</h3>
            <div className="ui form">
                <form>
                    <div className="field">
                        <label>Title</label>
                        <input type="text" fdprocessedid="087ji" placeholder="Task Title" name="title" />
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <textarea rows="2" spellcheck="false" placeholder="Task Description" name="description"/>
                    </div>
                    <button className="ui primary button">Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddTask;