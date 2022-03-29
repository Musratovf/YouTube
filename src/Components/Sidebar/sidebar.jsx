import React from 'react';
import './_sidebar.scss'
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied,
} from "react-icons/md"

const Sidebar = ({ sidebar, handleToogleSidebar }) => {
    return (
        <nav 
            className={sidebar?"sidebar open":"sidebar"}
            onClick={ () => handleToogleSidebar ( false ) }>
            <li>
                <MdHome/>
                <span>Home</span>
            </li>
            <li>
                <MdSubscriptions/>
                <span>Subscriptions</span>
            </li>
            <li>
                <MdThumbUp/>
                <span>Liked Video</span>
            </li>
            <li>
                <MdHistory/>
                <span>History</span>
            </li>
            <li>
                <MdLibraryBooks/>
                <span>Library</span>
            </li>
            <li>
                <MdSentimentDissatisfied/>
                <span>I don't know</span>
            </li>
            <hr />
            <li>
                <MdExitToApp/>
                <span>Log out</span>
            </li>
            <hr />
        </nav>
    );
}

export default Sidebar;
