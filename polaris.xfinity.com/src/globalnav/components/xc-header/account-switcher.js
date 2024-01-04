import md5 from 'md5';
import {
    storage
} from '../../orc/lib';

export const anHashSalt = '7ZPT8mLhXWop';

let nodesForEach = (selector, callback) => {
    var items = document.querySelectorAll(selector);

    Array.prototype.forEach.call(items, callback);
};

export let _addAccountSwitcherListeners = () => {
    nodesForEach('.xc-header--account-switcher-anchor', link => {
        link.addEventListener('click', _accountSelectionHandler);
    });
};

export let _clearSaltedMd5Account = () => {
    localStorage.removeItem('saltedMd5Account');
};

let _accountSelectionHandler = (event) => {
    const selectedAccount = event.target.closest('.xc-header--account-switcher-anchor');

    nodesForEach('.xc-header--account-switcher-check', icon => {
        icon.classList.add('xc-hidden');
    });
    nodesForEach('.xc-header--account-switcher-unchecked', icon => {
        icon.classList.remove('xc-hidden');
    });

    selectedAccount.querySelector('.xc-header--account-switcher-check')
        .classList.remove('xc-hidden');
    selectedAccount.querySelector('.xc-header--account-switcher-unchecked')
        .classList.add('xc-hidden');

    _setCurrentAccount(selectedAccount.getAttribute('value'));
};

let _setCurrentAccount = (accountNumber) => {
    const saltedMd5Account = md5(`${accountNumber}${anHashSalt}`);
    const customEventInit = {
        name: 'account-selector',
        detail: {
            type: 'account',
            response: saltedMd5Account
        }
    };

    window.dispatchEvent(new CustomEvent('polaris-data-changed', customEventInit), {
        bubbles: true
    });

    storage.set('saltedMd5Account', saltedMd5Account);
    window.location.reload();
};