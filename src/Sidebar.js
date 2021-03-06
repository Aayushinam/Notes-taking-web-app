function Sidebar(){
    return (
        <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button>Add</button>
        </div>
        <div className="add-sidebar-notes">
            <div className="app-sidebar-note">
                <div className="sidebar-note-title">
                    <strong>Title</strong>
                    <button>Delete</button>
                </div>
                <p>Notes Preview</p>
                <small className="note-meta">Last modified [Date]</small>
            </div>
        </div>
    </div>
    );
}

export default Sidebar;