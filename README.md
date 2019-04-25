@neotracker/persistgql
======================



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@neotracker/persistgql.svg)](https://npmjs.org/package/@neotracker/persistgql)
[![CircleCI](https://circleci.com/gh/neotracker/persistgql/tree/master.svg?style=shield)](https://circleci.com/gh/neotracker/persistgql/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/@neotracker/persistgql.svg)](https://npmjs.org/package/@neotracker/persistgql)
[![License](https://img.shields.io/npm/l/@neotracker/persistgql.svg)](https://github.com/neotracker/persistgql/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @neotracker/persistgql
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
@neotracker/persistgql/0.2.0 darwin-x64 node-v11.10.1
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-example persistgql OUTPUT`](#oclif-example-persistgql-output)

## `oclif-example persistgql OUTPUT`

Extract persisted queries from a client

```
USAGE
  $ oclif-example persistgql OUTPUT

ARGUMENTS
  OUTPUT  [default: manifest.json] Path to write the extracted queries to

OPTIONS
  -c, --config=config                    Path to your Apollo config file
  -t, --tag=tag                          [default: current] The published service tag for this client
  --clientName=clientName                Name of the client that the queries will be attached to

  --clientReferenceId=clientReferenceId  Reference id for the client which will match ids from client traces, will use
                                         clientName if not provided

  --clientVersion=clientVersion          The version of the client that the queries will be attached to

  --endpoint=endpoint                    The url of your service

  --excludes=excludes                    Glob of files to exclude for GraphQL operations. Caveat: this doesn't currently
                                         work in watch mode

  --header=header                        Additional headers to send to server for introspectionQuery

  --includes=includes                    Glob of files to search for GraphQL operations

  --key=key                              The API key for the Apollo Engine service

  --queries=queries                      Deprecated in favor of the includes flag
```

_See code: [src/commands/persistgql.ts](https://github.com/neotracker/persistgql/blob/v0.2.0/src/commands/persistgql.ts)_
<!-- commandsstop -->
