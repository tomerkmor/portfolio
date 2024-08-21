const TrackerGuide = () => {
    return (
        <div>
            <br />
            <p><b>GET</b> user's exercise log:</p>
            <p><b>http://localhost:5000/api/exercises/:yourUserName/logs?[from][&to][&limit]</b></p>
            <p>[ ] = optional</p>
            <p>from, to = dates (yyyy-mm-dd); limit = number</p>
        </div>
    )
}

export default TrackerGuide