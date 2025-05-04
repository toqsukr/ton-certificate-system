# TON Storage Gateway

TON Storage Gateway is a Node.js application that allows you to retrieve content from [TON Storage](https://ton.org/docs/participate/ton-storage/storage-faq) via the http(s) protocol.

## Overview

- use the path `/gateway/<bag-id>/<file-path>` to view the content of the `<file-path>`;
- use the path `/gateway/files/<bag-id>/<catalog-path>` to view the files and folders of the `<catalog-path>`;
- use the path `/gateway/download/<bag-id>/<file-path>` to request gateway to download the `<file-path>` from `<bag-id>` to local storage (requires authorization);
- use the path `/gateway/remove/<bag-id>` to remove the `<bag-id>` files from local storage (requires authorization);
- use the path `/auth/signin` for admin authentication;
- use the path `/auth/signout` for admin exit.

You can configure the app and change the prefixes in the [src/config.js](src/config.js) file.

## Ready-to-go Docker container

You can install this application with [docker container](https://github.com/kdimentionaltree/ton-storage-docker) or do each step yourself.

---

### Setup the app environment

Create a new `.env` file based on the `.env.example`.

```bash
cp .env.example .env
```

Edit the `.env` file according to your environment.

```js
SERVER_PORT = 3000
SERVER_HOST = '0.0.0.0'
SERVER_HOSTNAME = 'domain.ton'

TONSTORAGE_BIN = '/root/storage-daemon-cli'
TONSTORAGE_HOST = '127.0.0.1:5555'
TONSTORAGE_DATABASE = '/var/ton-storage'
TONSTORAGE_TIMEOUT = 5000

SESSION_COOKIE_NAME = 'sid'
SESSION_COOKIE_PASSWORD = 'password-should-be-32-characters'
SESSION_COOKIE_ISSECURE = false

GITHUB_AUTH_PASSWORD = 'password-should-be-32-characters'
GITHUB_AUTH_CLIENTID = 'authclientid'
GITHUB_AUTH_CLIENTSECRET = 'authclientsecret'
GITHUB_AUTH_ISSECURE = false
```

Where:

- `SERVER_PORT` - PORT of your http(s) application;
- `SERVER_HOST` - IP address of your http(s) application;
- `SERVER_HOSTNAME` - domain name, used when `disableIP` is enabled in the [src/config.js](src/config.js) file;
- `TONSTORAGE_BIN` - absolute path to `storage-daemon-cli`;
- `TONSTORAGE_HOST` - `<IP>:<CLI-PORT>` of `storage-daemon`;
- `TONSTORAGE_DATABASE` - absolute path to `storage-daemon` database;
- `TONSTORAGE_TIMEOUT` - timeout when calling `storage-daemon`.

The constants below are only used when `whitelistMode` is enabled in the [src/config.js](src/config.js) file:

- `SESSION_COOKIE_NAME` - session name;
- `SESSION_COOKIE_PASSWORD` - cookie password, used to encode the cookie, requires a length of at least 32 characters;
- `SESSION_COOKIE_ISSECURE` - cookie is only send to the server with an encrypted request over the https protocol;
- `GITHUB_AUTH_PASSWORD` - session password, used to encode the session, requires a length of at least 32 characters;
- `GITHUB_AUTH_CLIENTID` - parameter from [GitHub OAuth configuration](https://docs.github.com/en/rest/guides/basics-of-authentication?apiVersion=2022-11-28);
- `GITHUB_AUTH_CLIENTSECRET` - parameter from [GitHub OAuth configuration](https://docs.github.com/en/rest/guides/basics-of-authentication?apiVersion=2022-11-28);
- `GITHUB_AUTH_ISSECURE` - session cookie is only send to the server with an encrypted request over the https protocol.

---

## License

Released under the [MIT License](LICENSE).
