// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function getUrlB(callback) {
    var theTab;
    g = chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
        callback( String(tabs[0].url));
        }
     );
}    

function parseAndOpenSpotify(tab){
    if (tab.indexOf("play.spotify.com") > -1){
        tab = String(tab);
        x = tab.substring(tab.indexOf("?"),tab.indexOf(".com")+5);
        var res = "spotify://" + x;
        //alert(res);
        window.open(res);
    }
    else{
        alert("not a Spotify link");
    }
};
//Gets Url and then run the displayTab. This seems to be needed because asynchronous.
getUrlB(parseAndOpenSpotify);
