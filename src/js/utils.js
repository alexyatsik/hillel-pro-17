'use strict';

let apis;

function seek(selector) {
    return document.querySelector(selector) || false;
}

function destroy(selector) {
    const target = seek(selector);
    if (target) {
        target.remove();
    }
}

function getUniqueId() {
    return Math.floor((Date.now() * Math.random()) % 100000).toString();
}

function addItemToLocalStorage(lsName, item) {
    let db = getLocalStorage(lsName);
    if (!db) {
        db = [];
    }

    db.push(item);
    localStorage.setItem(lsName, JSON.stringify(db));
}

function updateItemInLocalStorage(lsName, item) {
    const db = getLocalStorage(lsName);
    for (let i = 0; i < db.length; i++) {
        if (db[i].id === item.id) {
            db[i] = item;
            break;
        }
    }
    localStorage.setItem(lsName, JSON.stringify(db));
}

function getLocalStorage(lsName) {
    return JSON.parse(localStorage.getItem(lsName));
}

function getItemFromLocalStorage(lsName, itemId) {
    const ls = getLocalStorage(lsName);
    if (ls) {
        for (let i = 0; i < ls.length; i++) {
            if (ls[i].id === itemId) {
                return ls[i];
            }
        }
    }

    return false;
}

function deleteItemFromLocalStorage(lsName, itemId) {
    const db = getLocalStorage(lsName);
    for (let i = 0; i < db.length; i++) {
        if (db[i].id === itemId) {
            db.splice(i, 1);
            break;
        }
    }
    localStorage.setItem(lsName, JSON.stringify(db));
}