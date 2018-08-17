import React from 'react';
import './profileinfo.css';

const ProfileInfo = () => {
    return ( 
        <section className="content">
            <div>
                <img src="https://avatars2.githubusercontent.com/u/17994199?s=40&v=4" alt="profile" />
                <h1>Sean Parmar</h1>
                <h3>Parmesanio</h3>
                <button>Add a Bio</button>
                <hr />
                <svg class="octicon octicon-mail" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path></svg>
                <a href="#">sean.parmar@yahoo.com</a>
            </div>
        </section>
     );
}
 
export default ProfileInfo;