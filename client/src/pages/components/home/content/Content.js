
import '../../css/css/main.css'
import '../../css/css/util.css'

const Content = () => {

    return (
        <div className="wrap-login100-2">
            <div className="title p-t-45 p-b-25">
                <h1>Hello &#123;username&#125;! <br /></h1>
                <h4>Welcome to my website :)</h4>  
            </div>
            
            <br />
            <div class="lists p-r-30 p-l-30">
                <h2>My Apps:</h2>
                <p>This one, the one you are already using! :)</p>
                <p><a href="/my-list">Plano - Checker App</a></p>
                <p><a href="/task-manager">Task Manager</a></p>
                <p><a href="/Store" className="unavailable">Store</a></p>
                <br /><br />

                <h2>Pure JS exercises:</h2>
                <p><a href="/palindrome">Palindrome</a></p>
                <p><a href="/roman-numeral-converter" className="unavailable">Roman Numeral Converter</a></p>
                <p><a href="/phone-converter" className="unavailable">U.S Telephone Number Validor</a></p>
                <p><a href="/cash-register">Cash Register</a></p>
                <p><a href="/poki-wiki" className="unavailable">Pokemon Wiki</a></p>
                <br /><br />

                <h2>Node.JS Microservices:</h2>
                <p><a href="/timestamp" className="unavailable">Timestamp</a></p>
                <p><a href="/header-parser" className="unavailable">Header Parser</a></p>
                <p><a href="/url-shortener"className="unavailable">Url Shortener</a></p>
                <p><a href="/exercise-tracker"className="unavailable">Exercise Tracker</a></p>
                <p><a href="/file-metadata"className="unavailable">File Metadata</a></p>

            </div>
        </div>
    )
}

export default Content