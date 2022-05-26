function Main(){
    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input type="text" id="title" autofocus/>
                <textarea id="body" placeholder="write your note here"/>
            </div>
            <div className="app-main-note-preview">
                <h1 className="preview-title">Title</h1>
                <div className="markdown-preview">note preview</div>
            </div>
        </div>
    );
}
export default Main;