import React from 'react'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import Avatar from '@material-ui/core/Avatar';
import "./style.css";

const TopBare = () => {
    return (
        <header>
            <img height="50" width="50" src="data:image/png;base64,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" alt="logo" />
            <nav>
                <ul>
                    <li>
                        <NotificationsNoneIcon />
                    </li>
                    <li> <LanguageIcon /> </li>
                    <li> <SettingsIcon /> </li>
                    <li>

                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </li>
                </ul>

            </nav>

        </header>
    )
}

export default TopBare;
