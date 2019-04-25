import { ClientCommand } from 'apollo';
import { createHash } from 'crypto';
import { writeFileSync } from 'fs';
import { print } from 'graphql';

// tslint:disable-next-line:export-name no-default-export
export default class ClientPersistGQL extends ClientCommand {
  public static readonly description = 'Extract persisted queries from a client';
  public static readonly flags = {
    ...ClientCommand.flags,
  };

  // tslint:disable-next-line:readonly-array
  public static readonly args = [
    {
      name: 'output',
      description: 'Path to write the extracted queries to',
      required: true,
      default: 'manifest.json',
    },
  ];

  public async run() {
    // tslint:disable-next-line:no-any
    const { clientIdentity, operations, filename }: any = await this.runTasks(({ config, args }) => [
      {
        title: 'Extracting operations from project',
        // tslint:disable-next-line:no-any
        task: async (ctx: any) => {
          ctx.operations = Object.values(this.project.mergedOperationsAndFragmentsForService).map((operationAST) => {
            // While this could include dropping unused definitions, they are
            // kept because the registered operations should mirror those in the
            // client bundle minus any PII which lives within string literals.
            const text = print(operationAST);
            const sha256 = createHash('sha256');
            const queryID = sha256.update(JSON.stringify(text)).digest('hex');

            return {
              queryID,
              text,
            };
          });
          ctx.clientIdentity = config.client;
        },
      },
      {
        title: 'Outputing extracted queries',
        // tslint:disable-next-line:no-any
        task: (ctx: any, task: any) => {
          const fileName = args.output;
          // tslint:disable-next-line:no-object-mutation
          task.title = `Outputing extracted queries to ${fileName}`;
          ctx.filename = fileName;
          writeFileSync(fileName, JSON.stringify({ version: 1, operations: ctx.operations }, undefined, 2));
        },
      },
    ]);

    this.log(
      `Successfully wrote ${operations.length} operations from the ${clientIdentity.name} client to ${filename}`,
    );
  }
}
