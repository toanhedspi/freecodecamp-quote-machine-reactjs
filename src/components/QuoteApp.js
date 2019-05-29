'user strict'

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faTumblrSquare } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { stylesGlobal } from '../style/style';

export const QuoteApp = (props) => {

    return (
        <div id="bg" style={{ oldColor: "#000", newColor: props.color, backgroundColor: props.color, ...stylesGlobal.backgroundDiv }}>
            <div style={stylesGlobal.containerDiv}>
                <div style={stylesGlobal.contentDiv}>
                    <div style={stylesGlobal.quoteContainer}>
                        <FontAwesomeIcon 
                            icon={faQuoteLeft} 
                            size="2x" 
                            color={props.color} 
                            style={{ marginRight: 7 }} />
                        <span style={stylesGlobal.quoteContent}>
                            {props.data.quote ? props.data.quote : ""}
                        </span>
                    </div>
                    <div style={{color: props.color, ...stylesGlobal.authorContainer}}>
                        <span>
                            - {[props.data.author]}
                        </span>
                    </div>
                    <div style={stylesGlobal.buttonList}>
                        <a
                            id="tweet-quote"
                            type="button"
                            style={stylesGlobal.socialButton}
                            target="_blank"
                            href={`https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text="${props.data.quote}"%20-%20${props.data.author}`}>
                            <FontAwesomeIcon icon={faTwitterSquare} size="2x" color={props.color} />
                        </a>
                        <a
                            id="tweet-quote"
                            type="button"
                            style={stylesGlobal.socialButton}
                            target="_blank"
                            href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${props.data.author}&content=${props.data.quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}>
                            <FontAwesomeIcon icon={faTumblrSquare} size="2x" color={props.color} />
                        </a>
                        <button
                            style={{ backgroundColor: props.color, ...stylesGlobal.changeButton }}
                            onClick={props.onChangeQuote}>
                            New quote
                        </button>
                    </div>
                </div>
                <div style={stylesGlobal.footerDiv}>
                    by Toan
                </div>
            </div>
        </div >
    )
}

